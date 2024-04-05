import * as E from 'fp-ts/lib/Either.js'
import { isLeft, left, right } from 'fp-ts/lib/Either.js'
import { flow, pipe } from 'fp-ts/lib/function.js'
import * as TE from 'fp-ts/lib/TaskEither.js'
import * as t from 'io-ts'
import { PathReporter } from 'io-ts/lib/PathReporter.js'
import safeFetchJson from './safeFetchJson.mjs'

test('handles 200 success', async () => {
  const results = await safeFetchJson<{ foo: string }>('https://www.api.com/200')()
  expect(results).toEqual(right({ foo: 'bar' }))
})

test('handles 500 failure', async () => {
  const results = await safeFetchJson<{ foo: string }>('https://www.api.com/500')()
  expect(isLeft(results)).toBeTruthy()
})

test('handles 200 response with bad JSON', async () => {
  const results = await safeFetchJson('https://www.api.com/200/body')()
  expect(results).toEqual(
    left(
      expect.any(Error)
    )
  )
})

test('with io-ts', async () => {
  const parse = t.type({ foo: t.string }, 'api response')

  type R = t.TypeOf<typeof parse>

  const results = await pipe(
    safeFetchJson<R>('https://www.api.com/200'),
    TE.chainW(flow(parse.decode, TE.fromEither))
  )()

  expect(results).toEqual(right({ foo: 'bar' }))

  const badResults = await pipe(
    safeFetchJson<R>('https://www.api.com/200/alt'),
    TE.map(parse.decode)
  )()

  pipe(
    badResults,
    E.fold(
      (e) => [],
      (x) => PathReporter.report(x)
    ),
    (x) =>
      expect(x).toEqual([
        'Invalid value undefined supplied to : api response/foo: string',
      ])
  )
})
