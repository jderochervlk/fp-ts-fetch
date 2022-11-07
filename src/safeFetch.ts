/**
 * @since 1.0.0
 */

import { pipe } from 'fp-ts/lib/function'
import * as TE from 'fp-ts/TaskEither'
import * as E from 'fp-ts/Either'

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
export default function safeFetch(input: RequestInfo | URL, init?: RequestInit | undefined) {
    return pipe(TE.tryCatch(() => fetch(input, init), e => Error(`fetch failed: ${e}`)), TE.chainW(res => res.ok ? TE.right(res): TE.left(res)))
}