import Assertions from '../utilities/Assertions';

const finishPagePF = require('../page_factory/FinishPagePF.json');

var TotalExpectedProductPrice=0;
export default class FinishPagePO {
    constructor() {
        this.productPrice = finishPagePF.productPrice;
        this.totalPrice=finishPagePF.totalPrice;
        this.totalPriceBeforeTax=finishPagePF.totalPriceBeforeTax;
        this.taxPrice=finishPagePF.taxPrice;
        this.finishButton = finishPagePF.finishButton;
        this.successMessage = finishPagePF.successMessage;


    }

    validateTheTotalPriceBeforeTaxIsValid() {
        cy.get(this.productPrice).each(($element) => {
            cy.wrap($element).invoke('text').then((price)=>{
                price=parseFloat(price.replace('$', ''));
                TotalExpectedProductPrice += price;
                cy.log("Total Expected Product Price: " + TotalExpectedProductPrice);
                cy.log("Price of the product: " + price);
            })
            });

        cy.get(this.totalPriceBeforeTax).invoke('text').then((totalPriceBeforeTax) => {
            totalPriceBeforeTax = parseFloat(totalPriceBeforeTax.replace('$', ''));
            expect(129.94).to.equal(TotalExpectedProductPrice);
        });
    }

    clickOnFinishButton() {
        cy.get(this.finishButton).click();
        cy.get(this.successMessage).should('contain', 'THANK YOU FOR YOUR ORDER');
        Assertions.assertElementContainsText(this.successMessage, 'THANK YOU FOR YOUR ORDER');

    }
}