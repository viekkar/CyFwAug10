import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import ProductPagePO from "../../support/page_objects/ProductPagePO";

const productPagePO = new ProductPagePO();

Given("user adds products to the cart", () => {
    productPagePO.addProductsToTheCart();
});

And("user validates the shopping cart counter", () => {
    productPagePO.validateShoppingCartCounter();
});

And("user clicks on the shopping cart link", () => {
    productPagePO.clickOnShoppingCartLink();
});
