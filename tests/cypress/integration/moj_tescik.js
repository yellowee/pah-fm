/// <reference types="Cypress" />
describe('moj_tescik', function() {
  it ('visits pah-fm website', function () {
    cy.visit('http://localhost:8080/login')
    cy.get('[name=username]')
    .type('hello@codeforpoznan.pl')
    cy.get('[name=password]')
    .type('cfp123')
    cy.get('.btn').click()
  })
})
