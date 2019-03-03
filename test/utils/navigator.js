import {
    LoginPage,
    HomePage,
    AccountPage
  } from '../pages'
  
export default class Navigator {
    constructor() {
      this.pagesVisited = []
    }
  
    homePage() {
      this.pagesVisited.push('home-page');
      return new HomePage();
    }
  
    loginPage() {
      this.pagesVisited.push('login-page');
      return new LoginPage();
    }
  
    accountPage() {
      this.pagesVisited.push('account-page');
      return new AccountPage();
    }
  }