/**
 * @since 1.0.0
 */

import { left, right } from "fp-ts/lib/Either.js";
import { type TaskEither, chainW, tryCatch } from "fp-ts/lib/TaskEither.js";
import { pipe } from "fp-ts/lib/function.js";

/**
 * @since 1.2.0
 *
 * A server error response with a `status` and `statusText`.
 */
export type ServerError = Response;

/**
 * Calls `fetch` and returns `TaskEither<ServerError, Error>` depending on the value of `response.ok`.
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
	return () =>
		fetch(input, init).then((res) =>
			res.ok
				? right<ServerError, Response>(res)
				: left<ServerError, Response>(res),
		);
}
