/// <reference types="vitest" />

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [
		dts({
			tsconfigPath: "./tsconfig.build.json",
		}),
	],
	build: {
		lib: {
			entry: "./src/index.mts",
			fileName: "index",
			formats: ["es", "cjs"],
		},
		rollupOptions: {
			external: [/fp-ts\/lib/],
		},
	},
	test: {
		globals: true,
		setupFiles: ["./test.setup.mts"],
		typecheck: {
			tsconfig: "./tsconfig.test.json",
		},
	},
});
