/// <reference types="vitest/config" />
import tailwindcss from '@tailwindcss/vite';
import { resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import path from "node:path";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
const dirname =
  typeof __dirname !== "undefined" ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  build: {
    lib: {
      entry: {
        "components/ui/button/index": resolve(
          fileURLToPath(new URL(".", import.meta.url)),
          "src/components/ui/button/index.ts",
        ),
        "lib/utils": resolve(fileURLToPath(new URL(".", import.meta.url)), "src/lib/utils.ts"),
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue", "tailwindcss"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      "@": resolve(fileURLToPath(new URL(".", import.meta.url)), "src"),
    },
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: "playwright",
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});
