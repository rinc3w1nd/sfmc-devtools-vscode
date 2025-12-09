const { FlatCompat } = require("@eslint/eslintrc");
const path = require("node:path");

const compat = new FlatCompat({
  baseDirectory: path.resolve(),
});

module.exports = [
  {
    ignores: ["dist", "src/**/*.d.ts"],
  },
  ...compat.extends(
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:import/typescript"
  ),
  {
    files: ["**/*.ts"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
      },
    },
    rules: {
      "no-use-before-define": "error",
      "import/prefer-default-export": "off",
      "react/prop-types": "off",
      "no-console": "off",
      "no-var": "error",
      "no-eval": "error",
      "prefer-const": "error",
      "comma-spacing": "error",
      "no-trailing-spaces": "error",
      "arrow-spacing": "error",
      "prefer-arrow-callback": "error",
      "no-path-concat": "error",
      "@typescript-eslint/typedef": "error",
      "@typescript-eslint/no-inferrable-types": "error",
    },
  },
];
