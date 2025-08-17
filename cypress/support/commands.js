
// https://on.cypress.io/custom-commands


Cypress.Commands.add("Login", () => {
  cy.visit("https://www.saucedemo.com/v1/");
  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("#login-button").click();
  cy.url().should("include", "/inventory.html");
});

// Cypress.Commands.add("login", () => {
// });
