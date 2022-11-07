import { isLeft, left, right } from 'fp-ts/lib/Either'
import safeFetchJson from './safeFetchJson'

test('handles 200 success', async () => {
  const results = await safeFetchJson<{ foo: string }>('www.api.com/200')()
  expect(results).toEqual(right({ foo: 'bar' }))
})

test('handles 500 failure', async () => {
  const results = await safeFetchJson<{ foo: string }>('www.api.com/500')()
  expect(isLeft(results)).toBeTruthy()
})

test('handles 200 response with bad JSON', async () => {
  const results = await safeFetchJson('www.api.com/200/body')()
  expect(results).toEqual(
    left(
      Error(
        'failed to parse response JSON: SyntaxError: Unexpected token T in JSON at position 0'
      )
    )
  )
})
