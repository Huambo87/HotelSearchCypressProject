///<reference types = "Cypress"/>

import { data } from '../fixtures/params.json'

describe('Flights Tab Test to Check Flights Functionality', () => {

    const flights_tab = '[data-cy="Flight"]'
    // const origin_placeholder = '[placeholder = "City or airport"][name = "origin"]'
    const origin_placeholder = '[name = "origin"]'
    const destination_placeholder = '[name = "destination"]'
    const checkin = '#input-start-2'
    const checkout = '#input-end-2'
    const first_class_rbutton = '[id = "f_class"]'
    const business_rbutton = '[id = "business"]'
    const economy_rbutton = '[id = "economy"]'


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
        cy.get(destination_placeholder).should("be.visible")
        cy.get(flights_tab).invoke('attr', 'aria-expanded').should('eq', 'true')
        cy.get(flights_tab).invoke('text').should('eq', 'flight')
    })

    it('Populate Origin and Destination', () => {

        data.forEach(element => {
            cy.screenshot('Screenshot Test')
            cy.get(origin_placeholder).clear().type(element.from).invoke('val').should('eq', element.from)
            cy.get(destination_placeholder).clear().type(element.to).invoke('val').should('eq', element.to)

        })

        // cy.get(origin_placeholder).type(data[1].from).invoke('val').should('eq', data[1].from)
        // cy.get(destination_placeholder).type(data[1].to).invoke('val').should('eq', data[1].to)
    })

    it('Populate Check-in/out', () => {
        cy.get(checkin).type('31/12/2023').invoke('val').should('eq', '31/12/2023')
        cy.get(checkout).type('06/01/2024').invoke('val').should('eq', '06/01/2024')
        cy.get(checkout).clear()
        cy.get(checkout).type('25/01/2024').invoke('val').should('eq', '25/01/2024')
    })

    it('Check Radiobuttons', () => {
        cy.get(first_class_rbutton).click().should('be.checked')
        cy.get(business_rbutton).click().should('be.checked')
        cy.get(economy_rbutton).click().should('be.checked')
    })

})