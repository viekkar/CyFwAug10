export default class LoginPagePO {
  visitSauceLabs() {
    cy.visit("https://www.saucedemo.com/v1/");
  }

  enterUsername(username) {
    cy.get('input[type="text"]').type(username);
  }

  enterPassword(password) {
    cy.get('input[type="password"]').type(password);
  }

  clickLoginButton() {
    cy.get('#login-button').click();
  }
}