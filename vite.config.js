import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
	resolve: {
		alias: [
			{
				find: /@gizmo2d\/(.+)/,
				replacement: resolve(__dirname, "packages/$1/src/index.ts"),
			},
		],
	},
});
