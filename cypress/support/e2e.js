// Import commands.js using ES2015 syntax:
// Alternatively you can use CommonJS syntax: require('./commands')
import './commands'

Cypress.Commands.add("loginUser", (username, password) => {
    cy.get('[placeholder="username"]').type(username);
    cy.get('[placeholder="password"]').type(password);
    cy.get(".btn").click();
});