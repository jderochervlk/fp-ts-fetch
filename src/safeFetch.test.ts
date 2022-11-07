import safeFetch from './safeFetch'
import * as E from 'fp-ts/Either'

test('can get a 200 response', (done) => {
  safeFetch('www.api.com/200')().then((res) => {
    expect(E.getOrElseW(() => null)(res)).toEqual(
      expect.objectContaining({ status: 200, ok: true })
    )
    done()
  })
})

test('can post a 200 response', (done) => {
  safeFetch('www.api.com/200', {
    method: 'post',
    body: JSON.stringify({ name: 'Han Solo' }),
  })().then((res) => {
    expect(E.getOrElseW(() => null)(res)).toEqual(
      expect.objectContaining({ status: 200, ok: true })
    )
    done()
  })
})

test('can get a 500 response', (done) => {
  safeFetch('www.api.com/500')().then((res) => {
    expect(E.isLeft(res)).toBeTruthy()
    done()
  })
})

test('can post a 500 response', (done) => {
  safeFetch('www.api.com/500', {
    method: 'post',
    body: JSON.stringify({ foo: 'bar' }),
  })().then((res) => {
    expect(E.isLeft(res)).toBeTruthy()
    done()
  })
})
