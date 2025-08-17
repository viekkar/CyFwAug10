import CheckOutPagePO from "../../support/page_objects/CheckoutPagePO";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const checkOutPagePO = new CheckOutPagePO();
Given("user enters shipping information", () => {
    checkOutPagePO.enterCustomerInformation();
});

Given("user completes the checkout process", () => {
    checkOutPagePO.continueButton();
});

