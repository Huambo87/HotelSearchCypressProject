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

    it('Populate Origin and Destination', () => {
        cy.get(location_placeholder).type('Hyatt Hotel Toronto').invoke('val').should('eq', 'Hyatt Hotel Toronto')
    })

    it('Populate Dropoff', () => {
        cy.get(dropoff).clear()
        cy.get(dropoff).type('01/01/2024').invoke('val').should('eq', '01/01/2024')
    })

    it('Select Car Group', () => {
        cy.get(car_group_list).should("be.visible")
        cy.get(car_group_list).select('Group 1', {force: true})
        cy.get('[title = "Group 1"]').should("be.visible")

        cy.get(car_group_list).select('Group 2', {force: true})
        cy.get('[title = "Group 2"]').should("be.visible")

        cy.get(car_group_list).select('Group 3', {force: true})
        cy.get('[title = "Group 3"]').should("be.visible")
        
    })

    it('Select Driver Age', () => {
        cy.get(driver_age_list).should("be.visible")
        cy.get(driver_age_list).select('23', {force: true})
        cy.get('[title = "23"]').should("be.visible")

        cy.get(driver_age_list).select('24', {force: true})
        cy.get('[title = "24"]').should("be.visible")

        cy.get(driver_age_list).select('25', {force: true})
        cy.get('[title = "25"]').should("be.visible")

        cy.get(driver_age_list).select('26', {force: true})
        cy.get('[title = "26"]').should("be.visible")
    
    })

})






