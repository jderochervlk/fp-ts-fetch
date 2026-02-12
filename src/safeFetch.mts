/**
 * @since 1.0.0
 */

import { left, right } from "fp-ts/lib/Either.js";
import type { TaskEither } from "fp-ts/lib/TaskEither.js";

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
): TaskEither<ServerError | Error, Response> {
	return () =>
		fetch(input, init)
			.then((res) =>
				res.ok
					? right<ServerError, Response>(res)
					: left<ServerError, Response>(res),
			)
			.catch((e) => e);
}
