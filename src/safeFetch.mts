/**
 * @since 1.0.0
 */

import {
	type TaskEither,
	chainW,
	left,
	right,
	tryCatch,
} from "fp-ts/lib/TaskEither.js";
import { pipe } from "fp-ts/lib/function.js";

/**
 * @since 1.2.0
 *
 * A server error response with a `status` and `statusText`.
 */
export type ServerError = Response;

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
	init?: RequestInit | undefined,
): TaskEither<ServerError, Response> {
	return pipe(
		tryCatch(
			() => fetch(input, init),
			(e) =>
				new Response(`fetch failed: ${e}`, {
					status: 0,
					statusText: `fetch failed: ${e}`,
				}),
		),
		chainW((res) => (res.ok ? right(res) : left(res))),
	);
}
