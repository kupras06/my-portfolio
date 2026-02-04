import { fileURLToPath, URL } from "node:url";
import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [preact(), tailwindcss()],
	base: "/my-portfolio/", // Match your repository name
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
			react: "preact/compat",
			"react-dom/test-utils": "preact/test-utils",
			"react-dom": "preact/compat",
			"react/jsx-runtime": "preact/jsx-runtime",
		},
	},
	optimizeDeps: {
		exclude: ["lucide-preact"],
	},
});
