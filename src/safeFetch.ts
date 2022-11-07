/**
 * @since 1.0.0
 */

import { pipe } from 'fp-ts/lib/function'
import { tryCatch, chainW, right, left } from 'fp-ts/lib/TaskEither'

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
) {
  return pipe(
    tryCatch(
      () => fetch(input, init),
      (e) => Error(`fetch failed: ${e}`)
    ),
    chainW((res) => (res.ok ? right(res) : left(res)))
  )
}
