import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";

export default [
  {
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 2021,
      globals: globals.browser,
    },
    rules: {
      ...js.configs.recommended.rules,
      eqeqeq: "error",
      curly: "error",
      "no-var": "error",
      "prefer-const": "error",
      "no-unused-vars": "warn",
      "no-console": "warn",
    },
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "no-console": "warn",
    },
  },
];
