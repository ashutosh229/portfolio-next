import { Linter } from "eslint";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import ts from "@typescript-eslint/eslint-plugin";

const config = /** @type {Linter.Config} */ ({
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "next/core-web-vitals",
  ],
  plugins: {
    "@typescript-eslint": ts,
    react: react,
    "react-hooks": reactHooks,
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  ignorePatterns: ["dist", ".next", "node_modules"],
  settings: {
    react: {
      version: "detect",
    },
  },
});

export default config;
