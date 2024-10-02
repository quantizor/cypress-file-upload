const BROWSER_CHROME = ['chrome', 'chromium'];

export default function isManualEventHandling() {
  const { name, majorVersion } = Cypress.browser;

  if (BROWSER_CHROME.includes(name) && majorVersion < 73) {
    /**
     * Chrome <73 triggers 'change' event automatically
     * https://github.com/abramenal/cypress-file-upload/issues/34
     */
    return false;
  }

  return true;
}
