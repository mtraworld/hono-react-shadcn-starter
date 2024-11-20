import path from "node:path";
import build from "@hono/vite-build/node";
import adapter from "@hono/vite-dev-server/node";
import honox from "honox/vite";
import client from "honox/vite/client";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
	if (mode === "client") {
		return {
			build: {
				rollupOptions: {
					input: ["/app/style.css"],
					output: {
						assetFileNames: "static/assets/[name].[ext]",
					},
				},
			},
			resolve: {
				alias: {
					"@": path.resolve(__dirname, "app"), // Example alias for relative imports
				},
			},
			plugins: [client()],
		};
	}
	return {
		ssr: {
			external: ["react", "react-dom"],
		},
		plugins: [honox({ devServer: { adapter } }), build()],
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "app"), // Example alias for relative imports
			},
		},
	};
});
