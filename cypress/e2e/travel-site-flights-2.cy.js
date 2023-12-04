///<reference types = "Cypress"/>

describe('Flights Tab Test to Check Flights Functionality', () => {

    const flights_tab = '[data-cy="Flight"]'
    // const origin_placeholder = '[placeholder = "City or airport"][name = "origin"]'
    const origin_placeholder = '[name = "origin"]'
    const destination_placeholder = '[name = "destination"]'

    before(() => {
        cy.visit("http://localhost:3000")
    })

    beforeEach(() => {
        cy.get(flights_tab).click()
    })

    after(() => {
        cy.log("after all")
    })

    afterEach(() => {
        cy.log("after each")
    })    


    it('Navigate to Flight Tab', () => {
        cy.get(origin_placeholder).should("be.visible")
        cy.get(flights_tab).invoke('attr', 'aria-expanded').should('eq', 'true')
        cy.get(flights_tab).invoke('text').should('eq', 'flight')
        

    })

        
    it('Populate Origin and Destination', () => {
        cy.get(origin_placeholder).type("Toronto").invoke('val').should('eq', 'Toronto')
        cy.get(destination_placeholder).type("Baku").invoke('val').should('eq', 'Baku')

        

    })


})