describe('Counter Component', () => {
  it('increments and decrements the value', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Counter').parent().within(() => {
      cy.contains('0');
      cy.wait(3000);
      cy.contains('decrement-button').click();
      cy.wait(3000);
      cy.contains('decrement-button').click();
      cy.wait(3000);
      cy.contains('2');
      cy.contains('decrement-button').click();
      cy.wait(3000);
      cy.contains('decrement-button').click();
      cy.wait(3000);
      cy.contains('0');
    });
  });
});