module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "cypress"
    ],
    "rules": {
        "quotes": ["error", "double"],
        "cypress/no-assigning-return-values": "error",
        "cypress/no-unnecessary-waiting": "error",
        "cypress/assertion-before-screenshot": "warn",
        "cypress/no-force": "warn"
    }

}
module.exports = {
    root: true,
    plugins: ["eslint-plugin-cypress"],
    extends: ["plugin:cypress/recommended"],
    env: { "cypress/globals": true },
  };