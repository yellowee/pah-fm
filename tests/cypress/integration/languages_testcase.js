//Scenario 1 checks if there are language flags on pah-fm
describe('Languages testcases', function() {
  it('checks languages feature on pah-fm website', function() {
    cy.visit ('http://localhost:8080/login')
    cy.get('.language')
    cy.get('.flag-icon-pl')
    cy.get('.flag-icon-gb')
    cy.get('.flag-icon-ua')
    cy.reload()
  })
  it('User can change the language', function(){
    cy.visit ('http://localhost:8080/login')
    cy.get('.flag-icon-pl').click()
    cy.get('.flag-icon-gb').click()
    cy.get('.flag-icon-ua').click()
  })
  it('Refreshing the page does not affect the chosen language', function(){
    cy.visit ('http://localhost:8080/login')
    cy.get('.flag-icon-pl').click()
    cy.reload()
    cy.get('h2',).should('contain','Zaloguj');
    cy.get('.flag-icon-gb').click()
    cy.reload()
    cy.get('h2').should('contain','Login');
    cy.get('.flag-icon-ua').click()
    cy.reload()
    cy.get('h2').should('contain','Логін');
  })
})
