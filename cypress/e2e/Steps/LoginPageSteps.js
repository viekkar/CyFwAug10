import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPagePO from "../../support/page_objects/LoginPagePO";

const loginPage = new LoginPagePO();

Given("user visits the login page", () => {
  loginPage.visitSauceLabs();
});

When("the user enters valid username {string}", (username) => {
  loginPage.enterUsername(username);
});

And("the user enters valid password {string}", (password) => {
  loginPage.enterPassword(password);
});

And("clicks the login button", () => {
  loginPage.clickLoginButton();
});

Then("the user should be redirected to the dashboard", () => {
  loginPage.validateDashboard();
});

Then("user login to the application", () => {
  cy.Login();
});
 


