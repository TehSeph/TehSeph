import postcssScss from "postcss-scss";
import * as postcssStyledSyntax from "postcss-styled-syntax";

/**
 * @type {import('stylelint').Config}
 */
export default {
    extends: [
        "stylelint-config-recommended",
        "stylelint-config-css-modules",
        "stylelint-config-clean-order",
        "stylelint-config-tailwindcss",
    ],
    ignoreFiles: ["dist/**/*", "out/**/*", "resources/**/*"],
    rules: {
        // "at-rule-no-unknown": null,
        // "block-no-empty": true,
        // "alpha-value-notation": null,
        // "at-rule-no-deprecated": null,
        // "at-rule-no-vendor-prefix": null,
        // "at-rule-prelude-no-invalid": [true, { ignoreAtRules: ["media", "apply"] }],
        // "color-function-notation": null,
        // "color-hex-length": "long",
        // "custom-property-empty-line-before": null,
        // "declaration-block-no-redundant-longhand-properties": null,
        // "font-family-name-quotes": "always-where-recommended",
        // "hue-degree-notation": null,
        // "keyframes-name-pattern": null,
        // "length-zero-no-unit": null,
        // "no-descending-specificity": null,
        // "no-empty-source": null,
        // "no-invalid-position-at-import-rule": null,
        // "number-max-precision": null,
        // "property-no-unknown": null,
        // "property-no-vendor-prefix": null,
        // "selector-attribute-quotes": "always",
        // "selector-class-pattern": null,
        // "selector-id-pattern": null,
        // "selector-max-id": null,
        // "selector-no-vendor-prefix": null,
        // "selector-pseudo-element-colon-notation": "single",
        // "value-keyword-case": null,
        // "value-no-vendor-prefix": null,
    },
    overrides: [
        {
            files: ["**/*.scss"],
            customSyntax: postcssScss,
            extends: [
                "stylelint-config-recommended-scss",
                "stylelint-config-css-modules",
                "stylelint-config-clean-order",
                "stylelint-config-tailwindcss",
            ],
            rules: {
                // "scss/at-rule-no-unknown": null,
            },
        },
        {
            files: ["**/*.{js,ts,jsx,tsx,cjs,cts,mjs,mts}"],
            customSyntax: postcssStyledSyntax,
        },
    ],
};
