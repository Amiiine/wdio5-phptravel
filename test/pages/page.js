export default class Page {

    constructor(path) {
        this.path = path;
        this.validatePage();
      }

    validatePage() {
        browser.waitUntil(() => {
          //Will keep waiting until the URL matches the pattern
          console.info(`--> Expected url: ${this.path} | current: ${browser.getUrl()}`)
          return (browser.getUrl().match(this.path))
        }, browser.waitforTimeout, `Expected a page with url: ${this.path} Instead received this url: ${browser.getUrl()}`);
      }
  }
  