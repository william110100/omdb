/// <reference types="vitest" />

import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul',
      reporter: ["html", "json", "text"],
      reportsDirectory: "./tests/unit/coverage"
    },
    environment: "happy-dom",
    exclude: [...configDefaults.exclude, "packages/template/*"],
    globals: true,
    reporters: ["html"],
  },
});
