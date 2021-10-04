/// <reference types="cypress" />

context('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  });

  it('screenshot', () => {
    cy.get('h1')
      .should('have.length', 1)
      .contains('ACME Banana');
  });
});
