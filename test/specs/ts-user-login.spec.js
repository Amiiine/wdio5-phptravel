
import Navigator from '../utils/navigator'

describe('phptravels.net login access', function () {
  it('should allow user to login and display full name', function () {
    const navigator = new Navigator();
    browser.url('/')
    navigator.homePage().goToLoginPage();
    // entering user name, password and and submiting the page
    navigator.loginPage().fillInCredentialsAndLogin('user@phptravels.com', 'demouser');
    navigator.accountPage();
  });
});
