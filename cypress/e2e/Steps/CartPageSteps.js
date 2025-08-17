import CartPagePO from "../../support/page_objects/CartPagePO";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const cartPagePO = new CartPagePO();

Given("user proceeds to checkout", () => {
    cartPagePO.clickOnCheckOutButton();
});