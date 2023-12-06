///<reference types = "Cypress"/>
describe("Travel Site Assignment", () => {
    it("Navigate to Main Page", () => {
        cy.visit("http://localhost:3000")
        cy.url().should("eq", "http://localhost:3000/")
    })

    it("Check Elements", () => {
        cy.visit("http://localhost:3000")
        cy.get('#tab1 > form > :nth-child(1) > .label').should("be.visible")
        cy.get('#tab1 > form > .row > :nth-child(1) > .input-group > .label').should("be.visible")
        cy.get('#tab1 > form > .row > :nth-child(2) > .input-group > .label').should("be.visible")
        cy.get(':nth-child(3) > .label').should("be.visible")
        cy.get('.checkbox-row > .m-r-45').should("be.visible")
        cy.get('.checkbox-row > :nth-child(2)').should("be.visible")
        cy.get('#tab1 > form > .btn-submit').should("be.visible")
    })

    it("Check Elements Text", () => {
        cy.visit("http://localhost:3000")
        cy.get('#tab1 > form > :nth-child(1) > .label').should("have.text", "Going to")
        cy.get('#tab1 > form > .row > :nth-child(1) > .input-group > .label').should("have.text", "check-in")
        cy.get('#tab1 > form > .row > :nth-child(2) > .input-group > .label').should("have.text", "check-out")
        cy.get(':nth-child(3) > .label').should("have.text", "travellers")
        cy.contains('Add a flight').should("be.visible")
        cy.contains('Add a car').should("be.visible")
        cy.get('#tab1 > form > .btn-submit').should("have.text", "search")
    })

    it("Check Elements by Types", () => {
        cy.visit("http://localhost:3000")
        cy.get('[type = "text"]').should("be.visible")
        cy.get('#tab1 > form > .row > :nth-child(1) > .input-group > .label').should("be.visible")
        cy.get('#tab1 > form > .row > :nth-child(2) > .input-group > .label').should("be.visible")
        cy.get(':nth-child(3) > .label').should("be.visible")
        cy.get('.checkbox-row > .m-r-45').should("be.visible")
        cy.get('.checkbox-row > :nth-child(2)').should("be.visible")
        cy.get('#tab1 > form > .btn-submit').should("be.visible")

    })

})