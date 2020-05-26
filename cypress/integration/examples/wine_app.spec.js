/* eslint-disable no-undef */
describe('Wine App ', function() {
    beforeEach(function() {
        cy.visit('http://localhost:3000')
      })
    
    it('front page can be opened', function() {
      cy.contains('Wine Pairing App')
      cy.contains('Find a wine that goes well with a food.')
      cy.contains('Food trivia')
    })

    it('wine pairing ok', function() {
        cy.get('#food').type('fish')
        cy.get('#submit').click()
    })

  })