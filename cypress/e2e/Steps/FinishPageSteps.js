import FinishPagePO from "../../support/page_objects/FinishPagePO";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const finishPagePO = new FinishPagePO();

Given("user validate the cart total price", () => {
  finishPagePO.validateTheTotalPriceBeforeTaxIsValid();    
   });


Given("user finishes the checkout process", () => {
  finishPagePO.clickOnFinishButton();    
   });
