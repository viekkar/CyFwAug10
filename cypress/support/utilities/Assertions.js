export default class Assertions {
    static assertElementIsVisible(selector) {
        cy.get(selector).should('be.visible');
    }

    static assertElementContainsText(selector, text) {
        cy.get(selector).should('contain', text);
    }

    static assertElementHasValue(selector, value) {
        cy.get(selector).should('have.value', value);
    }

    static assertElementCount(selector, count) {
        cy.get(selector).should('have.length', count);
    }

    static assertUrlContains(text) {
        cy.url().should('include', text);
    }
}