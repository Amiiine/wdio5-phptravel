import Page from './page';
import * as assert from 'assert';


export class AccountPage extends Page {

  /**
  * Selectros to define elements
  */
  get welcomeMessage() { return $('//*[@id="body-section"]/div[1]/div/div/div[1]/h3'); }

  /**
  * Constants
  */
  static expectedWelcomeMessage = 'Hi, Johny Smith';

  constructor() {
    super(`/account`);
  }

  // validatePage(){
  //   super.validatePage();
  // }

  /** Ensures the page has loaded with correct data */
  validatePage() {
    super.validatePage()
    assert.equal(this.welcomeMessage.getText(), AccountPage.expectedWelcomeMessage, `Expected "${AccountPage.expectedWelcomeMessage}" to be displayed, but got "${this.welcomeMessage.getText()}"`)
  }

}
