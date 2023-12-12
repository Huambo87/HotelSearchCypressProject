/// <reference types = 'Cypress'/>

describe('Job Cafe Sanity Spec', () => {
    
    it('jobs page testing', () => {
        
        cy.visit('http://167.99.178.249:3000/')
        // cy.wait(5000)
        cy.get('[name = "Find Job"]').should('be.visible').click()
        cy.get('[class="post-item clearfix"]').should('be.visible')
    })

})