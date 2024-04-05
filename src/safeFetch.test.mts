import safeFetch from './safeFetch.mjs'
import * as E from 'fp-ts/lib/Either.js'

test('can get a 200 response', async () => {
  const res = await safeFetch('https://www.api.com/200')()

  expect(E.getOrElseW(() => null)(res)).toEqual(
    expect.objectContaining({ status: 200, ok: true })
  )
})

test('can post a 200 response', async () => {
  const res = await safeFetch('https://www.api.com/200', {
    method: 'post',
    body: JSON.stringify({ name: 'Han Solo' }),
  })()

  expect(E.getOrElseW(() => null)(res)).toEqual(
      expect.objectContaining({ status: 200, ok: true })
  )
})

test('can get a 500 response', async () => {
  const res = await safeFetch('https://www.api.com/500')()
  
  expect(E.isLeft(res)).toBeTruthy()
})

test('can post a 500 response', async () => {
  const res = await safeFetch('https://www.api.com/500', {
    method: 'post',
    body: JSON.stringify({ foo: 'bar' }),
  })()

  expect(E.isLeft(res)).toBeTruthy()
})
