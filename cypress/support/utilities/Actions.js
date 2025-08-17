export default class Actions {
    static clickElement(selector) {
        cy.get(selector).should('be.visible').click();
    }

    static typeInElement(selector, text) {
        cy.get(selector).type(text);
    }

    static clearElement(selector) {
        cy.get(selector).clear();
    }

    static selectOption(selector, value) {
        cy.get(selector).select(value);
    }

    static checkCheckbox(selector) {
        cy.get(selector).check();
    }

    static uncheckCheckbox(selector) {
        cy.get(selector).uncheck();
    }
    static validateText(selector, expectedText) {
        cy.get(selector, { timeout: 5000 })
            .should('be.visible')
            .invoke('text')
            .should('eq', expectedText)
    }

}   