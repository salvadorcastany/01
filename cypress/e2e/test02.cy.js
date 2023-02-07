/// <reference types="Cypress" />

describe("This is my second cypress test", () => {
    it("should have a title", () => {
        cy.visit("https://www.google.com/");
        cy.title().should("eq", "Google");
        cy.title().should("be.empty");
    });
});