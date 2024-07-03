const path = require('path');
const { ESLint } = require('eslint');

const eslintConfigPath = require.resolve('@umijs/max/eslint');

module.exports = new ESLint({
  overrideConfigFile: path.resolve(eslintConfigPath),
});
