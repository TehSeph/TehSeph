import * as path from "node:path";
import globals from "globals";
import js from "@eslint/js";
import importX from "eslint-plugin-import-x";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import typescript from "typescript-eslint";
import react from "@eslint-react/eslint-plugin";
import reactRefresh from "eslint-plugin-react-refresh";
import jsxA11yX from "eslint-plugin-jsx-a11y-x";
import jsonc from "eslint-plugin-jsonc";
import prettier from "eslint-config-prettier";

import { defineConfig, includeIgnoreFile } from "eslint/config";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsFiles = ["**/*.{js,ts,jsx,tsx,cjs,cts,mjs,mts}"];
const tsFiles = ["**/*.{ts,tsx,cts,mts}"];
const reactFiles = ["**/*.{jsx,tsx}"];
const jsonFiles = ["**/*.{json,jsonc,json5}"];

export default defineConfig([
    includeIgnoreFile(path.join(__dirname, ".prettierignore")),
    {
        files: jsFiles,
        plugins: {
            "import-x": importX,
            "simple-import-sort": simpleImportSort,
        },
        languageOptions: {
            ecmaVersion: "latest",
            // sourceType: "module",
            globals: { ...globals.node, ...globals.vitest },
        },
        /*linterOptions: {
            reportUnusedDisableDirectives: "warn",
        },*/
        rules: {
            ...js.configs.recommended.rules,
            "eqeqeq": ["error", "always"],
            // 'no-console': 'warn',
            "no-var": "error",
            "prefer-const": "error",
            "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            /*
            "curly": ["error", "multi"],
            "func-style": ["error", "declaration", { allowArrowFunctions: true }],
            "no-restricted-imports": [
                "error",
                {
                    patterns: [
                        {
                            group: [".*\/*"],
                            message:
                                "Use absolute imports with @ alias instead of relative imports",
                        },
                    ],
                },
            ],
            "no-undef": "off",
            "padding-line-between-statements": [
                "error",
                { blankLine: "always", next: "return", prev: "*" },
            ],
            "prefer-arrow-callback": [
                "error",
                { allowNamedFunctions: false, allowUnboundThis: true },
            ],
            "arrow-body-style": ["error", "as-needed"],
            "object-shorthand": ["error", "always"],

            "import-x/no-duplicates": [
                "error",
                { "considerQueryString": true, "prefer-inline": false },
            ],
            "import-x/no-extraneous-dependencies": "off",
            "import-x/no-relative-packages": "error",
            "import-x/no-relative-parent-imports": "error",
            "import-x/no-unresolved": "off",

            "simple-import-sort/exports": "error",
            "simple-import-sort/imports": "error",
            */
        },
    },
    {
        files: tsFiles,
        extends: [...typescript.configs.recommendedTypeChecked],
        languageOptions: {
            parserOptions: {
                projectService: {
                    allowDefaultProject: ["src/preload/index.d.ts"],
                },
                tsconfigRootDir: __dirname,
            },
        },
        rules: {
            "@typescript-eslint/explicit-function-return-type": "error",
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            /*
            "@typescript-eslint/consistent-type-exports": [
                "error",
                { fixMixedExportsWithInlineTypeSpecifier: true },
            ],
            "@typescript-eslint/consistent-type-imports": [
                "error",
                {
                    disallowTypeAnnotations: false,
                    fixStyle: "separate-type-imports",
                    prefer: "type-imports",
                },
            ],
            "@typescript-eslint/no-deprecated": "warn",
            "@typescript-eslint/no-empty-object-type": "off",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-import-type-side-effects": "error",
            "@typescript-eslint/no-namespace": "off",
            "@typescript-eslint/no-unsafe-assignment": "off",
            "@typescript-eslint/no-unsafe-call": "off",
            "@typescript-eslint/no-unsafe-member-access": "off",
            "@typescript-eslint/no-unsafe-return": "warn",
            "@typescript-eslint/no-unused-expressions": [
                "warn",
                { allowShortCircuit: true, allowTernary: true },
            ],
            "@typescript-eslint/unbound-method": "off",
            */
        },
    },
    {
        files: reactFiles,
        extends: [react.configs["recommended-typescript"], reactRefresh.configs.vite],
        plugins: {
            "jsx-a11y-x": jsxA11yX,
        },
        languageOptions: {
            globals: { ...globals.browser },
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            /*
            "jsx-a11y/alt-text": ["warn", { elements: ["img"], img: ["Image"] }],

            "react/jsx-sort-props": [
                "error",
                {
                    callbacksLast: true,
                    shorthandFirst: false,
                    shorthandLast: true,
                    multiline: "last",
                    ignoreCase: true,
                    noSortAlphabetically: false,
                    reservedFirst: true,
                },
            ],
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            */
        },
    },
    {
        files: jsonFiles,
        extends: [...jsonc.configs["recommended-with-jsonc"]],
    },
    ...jsonc.configs.prettier,
    prettier,
]);
