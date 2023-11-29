/**
 * @OnlyCurrentDoc
 *
 * Reference: https://developers.google.com/apps-script/guides/services/authorization
 */

function onOpen() {
  const ui = SpreadsheetApp.getUi();

  ui.createMenu('🤔 Demo')
    .addItem('🟢 Start', 'showSidebar')
    .addToUi();
}

function showSidebar() {
  const ui = SpreadsheetApp.getUi();
  const html = HtmlService.createHtmlOutputFromFile('sidebar').setTitle('🤔 Demo');
  ui.showSidebar(html);
}

function getString() {
  return 'This string is returned from the GAS server!';
}

function getObject() {
  return {
    key1: 'Test value 1',
    key2: 'Test value 2'
  }
}

function mirror(arg) {
  return arg;
}

function throwError() {
  throw new Error();
}
