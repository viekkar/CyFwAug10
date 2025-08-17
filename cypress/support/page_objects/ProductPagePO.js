import Actions from '../utilities/Actions';
import Assertions from '../utilities/Assertions';

const productPagePF = require('../page_factory/ProductPagePF.json');

export default class ProductPagePO {
    constructor() {
        this.addToCartButton = productPagePF.addToCartButton;
        this.shoppingPageCounter = productPagePF.shoppingPageCounter;
        this.shoppingCartLink = productPagePF.shoppingCartLink;

    }

    addProductsToTheCart() {
        cy.get(this.addToCartButton).each(($element)=>{
            cy.wrap($element).click();
        })
    };

    validateShoppingCartCounter(){
        Actions.validateText(this.shoppingPageCounter, '6');
    }

    clickOnShoppingCartLink(){
        cy.get(this.shoppingCartLink).click();
    }
    
}