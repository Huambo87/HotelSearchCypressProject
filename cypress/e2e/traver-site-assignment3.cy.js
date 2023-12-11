///<reference types = "Cypress"/>

describe('Car Tab Test to Check Car Functionality', () => {

    const car_tab = '[data-cy="Car"]'
    const location_placeholder = '[name = "location"]'
    const dropoff_placeholder = '[name = "dropoff"]'
    const dropoff = '[data-drop = "2"]'
    const car_group_list = '[name = "car-group"]'
    const driver_age_list = '[name = "driver-age"]'

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

})