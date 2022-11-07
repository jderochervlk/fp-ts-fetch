/**
 * @since 1.1.0
 */

import { pipe } from 'fp-ts/lib/function'
import safeFetch from './safeFetch'
import { tryCatch, chainW, right, left } from 'fp-ts/lib/TaskEither'

/**
 * Safely fetch and attempt to parse the responses json.
 *
 * @example
 * import { safeFetchJson } from '@jvlk/fp-ts-fetch'
 *
 * safeFetchJson('api.com')() // => Either<Error, T>
 *
 * @since 1.1.0
 */
export default function safeFetchJson<T>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) {
  return pipe(
    safeFetch(input, init),
    chainW((res) =>
      tryCatch<Error, T>(
        () => res.json(),
        (e) => Error(`failed to parse response JSON: ${e}`)
      )
    )
  )
}
