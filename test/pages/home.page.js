import Page from './page';
import { strict as assert } from 'assert';

export class HomePage extends Page {

  /**
  * Selectros to define elements
  */

  get myAccountToggle() { return $('div.collapse ul.navbar-right li#li_myaccount '); }
  get loginButton() {return $('li.open>ul.dropdown-menu>li:nth-of-type(1)>a')}

  constructor() {
    super(`/`);
  }

  /** Ensures the page has loaded */
  validatePage() {
    const title = browser.getTitle();
    assert.equal(title, 'PHPTRAVELS | Travel Technology Partner');
  }

  /**
   * your page specific methods
   */

  goToLoginPage() {
    this.myAccountToggle.click();
    this.loginButton.click();
  }
}
