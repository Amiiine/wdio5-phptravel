import Page from './page';

export class LoginPage extends Page {

  /**
  * Selectros to define elements
  */

  get usernameInput() { return $('//*[@name="username"]'); }
  get passwordInput() { return $('//*[@name="password"]'); }
  get rememberMe() { return $('//*[@id="remember-me"]'); }
  get loginButton() { return $('//button[contains(., "Login")]'); }
  get footerImage() { return $('//*[@class="pull-right brand img-responsive"]'); }

  constructor() {
    super(`login`);
  }

  /**
   * your page specific methods
   */

  fillInCredentialsAndLogin(username, password) {
    this.usernameInput.setValue(username);
    this.passwordInput.setValue(password);
    this.rememberMe.click();
    this.loginButton.click();
  }
}
