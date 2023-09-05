module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        "plugin:@typescript-eslint/recommended",
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: "@typescript-eslint/parser",
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project:["./tsconfig.json"] },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh', "@typescript-eslint"],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        "@typescript-eslint/strict-boolean-expressions": [
        2, { "allowString" : false, "allowNumber" : false }
        ]
    },
}