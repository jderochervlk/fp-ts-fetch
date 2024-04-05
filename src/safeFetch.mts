/**
 * @since 1.0.0
 */

import { pipe } from 'fp-ts/lib/function.js'
import { tryCatch, chainW, right, left, TaskEither } from 'fp-ts/lib/TaskEither.js'

/**
 * @since 1.2.0
 * 
 * A server error response with a `status` and `statusText`.
 */
export type ServerError = Response

/**
 * @since 1.2.0
 * 
 * Something went wrong with the fetch request and was unable to reach the server.
 */
export type FetchError = Error

/**
 * Wraps `fetch` in a `TaskEither.tryCatch`.
 *
 * @example
 * import { safeFetch } from '@jvlk/fp-ts-fetch'
 *
 * safeFetch('testing.com')
 *
 * @since 1.0.0
 */
export default function safeFetch(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
): TaskEither<ServerError | FetchError, Response> {
  return pipe(
    tryCatch(
      () => fetch(input, init),
      (e) => Error(`fetch failed: ${e}`)
    ),
    chainW((res) => (res.ok ? right(res) : left(res)))
  )
}
