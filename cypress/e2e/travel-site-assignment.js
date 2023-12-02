///<reference types = "Cypress"/>
describe("Travel Site Assignment", () => {
    it("Navigate to Main Page", () => {
        cy.visit("http://localhost:3000")
        cy.url().should("eq", "http://localhost:3000/")
    })

})