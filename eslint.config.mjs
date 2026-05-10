export default [
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script"
    },
    rules: {
      semi: ["error", "always"],
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }]
    }
  }
];
