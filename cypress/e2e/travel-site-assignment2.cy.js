///<reference types = "Cypress"/>

describe('Car Tab Test to Check Flights Functionality', () => {

    const car_tab = '[data-cy="Car"]'
    const location_placeholder = '[name = "location"]'
    const dropoff_placeholder = '[name = "dropoff"]'
    const dropoff = '[data-drop = "2"]'

    before(() => {
        cy.visit("http://localhost:3000")
    })

    beforeEach(() => {
        cy.get(car_tab).click()
    })

    it('Navigate to Car Tab', () => {
        cy.get(location_placeholder).should("be.visible")
        cy.get(dropoff_placeholder).should("be.visible")
        cy.get(car_tab).invoke('attr', 'aria-expanded').should('eq', 'true')
        cy.get(car_tab).invoke('text').should('eq', 'car')
    })

    it('Populate Origin and Destination', () => {
        cy.get(location_placeholder).type('Hyatt Hotel Toronto').invoke('val').should('eq', 'Hyatt Hotel Toronto')
    })

    it('Populate Dropoff', () => {
        cy.get(dropoff).clear()
        cy.get(dropoff).type('01/01/2024').invoke('val').should('eq', '01/01/2024')
    })

})






