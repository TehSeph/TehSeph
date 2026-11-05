/**
 * @type {import("prettier").Config}
 */
export default {
    plugins: [import.meta.resolve("prettier-plugin-tailwindcss")],

    // Tailwind Plugin Options
    tailwindAttributes: ["theme"],
    tailwindFunctions: ["clsx", "cva", "createTheme", "tv", "tw", "twMerge"],

    // Prettier API Options
    experimentalTernaries: true,
    printWidth: 100, // mid-point between 80 and 120, "targeted" line width, not a hard limit
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: false,
    quoteProps: "consistent",
    jsxSingleQuote: false,
    trailingComma: "all",
    bracketSpacing: true,
    objectWrap: "preserve",
    bracketSameLine: false,
    // jsxBracketSameLine: false, // deprecated, kept for backwards-compatibility
    arrowParens: "always",
    requirePragma: false,
    insertPragma: false,
    checkIgnorePragma: true,
    proseWrap: "never",
    htmlWhitespaceSensitivity: "strict",
    vueIndentScriptAndStyle: true,
    endOfLine: "crlf", // Windows by default, Unix where required using .gitattributes
    embeddedLanguageFormatting: "off",
    singleAttributePerLine: false,
};
