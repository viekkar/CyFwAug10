const LoginPagePF = require('../page_factory/LoginPagePF.json');
import Assertions from '../utilities/Assertions';

export default class LoginPagePO {
  constructor() {
    this.inputBox = LoginPagePF.inputBox;
    this.passwordBox = LoginPagePF.passwordBox;
    this.submitButton = LoginPagePF.submitButton;

  }
  visitSauceLabs() {
    cy.visit("https://www.saucedemo.com/v1/");
  }

  enterUsername(username) {
    cy.get(this.inputBox).type(username);
  }

  enterPassword(password) {
    cy.get(this.passwordBox).type(password);
  }

  clickLoginButton() {
    cy.get(this.submitButton).click();
  }

  validateDashboard() {
    cy.get('.app_logo').should('be.visible');
  }
}