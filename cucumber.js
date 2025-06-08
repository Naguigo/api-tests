module.exports = {
  default: [
    '--require-module ts-node/register',
    '--require features/**/*.ts',
    '--publish-quiet',
    '--format html:reports/cucumber-report.html' // Gera relatório HTML
  ].join(' ')
}