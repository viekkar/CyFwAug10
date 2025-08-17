const cartPagePF = require("../../support/page_factory/CartPagePF.json");

export default class CartPagePO{
    constructor(){
        this.checkOutButton = cartPagePF.checkOutButton;
    }
    clickOnCheckOutButton() {
        cy.get(this.checkOutButton).click();
    }
}