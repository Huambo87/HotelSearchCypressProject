///<reference types = "Cypress"/>

const { describe } = require("mocha")

describe("spec template", () => {
    it('test1', () => {
        cy.visit("https://tmk-dev2.dev2.webant.ru/passport/login/oauth/authorize?client_id=26f537e02a3015e918cc&response_type=code&redirect_uri=https%3A%2F%2Ftmk.dev2.webant.ru&scope=read&state=0o0zbf9y11ne")
        cy.url().should("eq", "https://tmk-dev2.dev2.webant.ru/passport/login/oauth/authorize?client_id=26f537e02a3015e918cc&response_type=code&redirect_uri=https%3A%2F%2Ftmk.dev2.webant.ru&scope=read&state=0o0zbf9y11ne")
    })
})

describe('Test Suite', () => {
    it('test1', () => {

    })

})

Cypress.on('uncaught:exception', (err, runnable) => {
    //Returning false here prevents Cypress
    //from failing the test
    return false
  })
