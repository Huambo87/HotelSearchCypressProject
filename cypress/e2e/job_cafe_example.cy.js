// /// <reference types = 'Cypress'/>

// describe('Job Cafe Sanity Spec', { defaultCommandTimeout: 10000 }, () => {

//     // it('jobs page testing', {defaultCommandTimeout: 10000}, () => {

//     //     cy.visit('')
//     //     // cy.wait(5000)
//     //     cy.get('[name = "Find Job"]').should('be.visible').click()
//     //     cy.get('[class="post-item clearfix"]').should('be.visible')
//     // })

//     it('jobs page search for QA position testing', { defaultCommandTimeout: 30000 }, () => {
//         cy.visit('')
//         cy.get('[name = "Find Job"]').should('be.visible').click()
//         // cy.get('[class="post-item clearfix"]').should('be.visible')
//         // cy.get('[placeholder = "position"]').type('QA', {force: true})
//         // cy.get('button').contains('search').click({force: true})
//         cy.searchForPosition('QA', 'USA', 'Apple')
//         // cy.get('[class="post-item clearfix"]').contains('QA').should('be.visible', {force: true})
//     })

//     it('jobs page search for developer position testing', { defaultCommandTimeout: 10000 }, () => {
//         cy.visit('')
//         cy.get('[name = "Find Job"]').should('be.visible').click()
//         // cy.get('[class="post-item clearfix"]').should('be.visible')
//         // cy.get('[placeholder = "position"]').type('developer', {force: true})
//         // cy.get('button').contains('search').click({force: true})
//         cy.searchForPosition('developer', 'USA', 'Apple')
//         // cy.get('[class="post-item clearfix"]').contains('developer').should('be.visible', {force: true})
//     })

//     it('jobs page search for developer position testing', { defaultCommandTimeout: 10000 }, () => {
//         cy.visit('')
//         cy.get('[name = "Find Job"]').should('be.visible').click()
//         // cy.get('[class="post-item clearfix"]').should('be.visible')
//         // cy.get('[placeholder = "position"]').type('developer', {force: true})
//         // cy.get('button').contains('search').click({force: true})
//         cy.searchForPosition('devops', 'Canada', 'IBM')
//         // cy.get('[class="post-item clearfix"]').contains('developer').should('be.visible', {force: true})
//     })



//     // it('jobs page testing', {defaultCommandTimeout: 10000}, () => {

//     //     cy.visit('http://167.99.178.249:3000/', {timeout: 100000000})
//     //     // cy.wait(5000)
//     //     cy.get('[name = "Find Job"]').should('be.visible').click()
//     //     cy.get('[class="post-item clearfix"]').should('be.visible')
//     // })

// })