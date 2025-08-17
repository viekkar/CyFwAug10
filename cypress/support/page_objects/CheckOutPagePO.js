const checkOutPagePF= require('../page_factory/CheckOutPagePF.json');
export default class CheckOutPagePO{

    constructor(){
        this.firstNameInput = checkOutPagePF.firstName;
        this.lastNameInput = checkOutPagePF.lastName;
        this.postalCodeInput =checkOutPagePF.postalCode;
        this.continueButton = checkOutPagePF.continueToFinishButton;
    }

    enterCustomerInformation(){
        cy.get(this.firstNameInput).type("Vishnu");
        cy.get(this.lastNameInput).type("Ekkar");
        cy.get(this.postalCodeInput).type("123456");
        cy.get(this.continueButton).click();
    }


    clickOnContinueButton(){
        cy.get(this.continueButton).click();
    }




}