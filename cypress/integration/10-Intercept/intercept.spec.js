/// <reference types="cypress" />
import payload from '../../fixtures/intercept.json'
describe('verify the intercept concept', function () {

    it.skip('verify the get Comment functionality', function () {
        cy.intercept({
            "method": "GET",
            "url": "https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Get Comment').click()
        cy.wait('@getComment')
        cy.get('.network-comment')
            .should('contain', `laudantium`)

    })


    it.skip('verify the get Comment functionality', function () {
        cy.intercept({
            "method": "GET",
            "url": "https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function ({ response, request }) {
            cy.log(response)
            //cy.log(request)
            expect(response.statusCode).to.eql(200)
            cy.get('.network-comment')
                .should('have.text', response.body.body)
        })

    })


    it.skip('verify the get Comment functionality', function () {
        cy.intercept({
            "method": "POST",
            "url": "https://jsonplaceholder.cypress.io/comments"
        }).as('postComment')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Post Comment').click()
        cy.wait('@postComment').then(function ({ response, request }) {
            //cy.log(response)
            //cy.log(request)
            expect(response.statusCode).to.eql(201)
            cy.get('.network-post-comment')
                .should('have.text', 'POST successful!')
        })

    })

    it.skip('verify the get Comment functionality', function () {
        cy.intercept({
            "method": "PUT",
            "url": "https://jsonplaceholder.cypress.io/comments/1"
        }).as('updateComment')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Update Comment').click()
        cy.wait('@updateComment').then(function ({ response, request }) {
            expect(response.statusCode).to.eql(200)

        })

    })

    it.skip('verify the getComment API with stubbed data :body ', function () {
        cy.intercept({
            url: "https://jsonplaceholder.cypress.io/comments/1",
            method: "GET"
        }, {
            statusCode: 200,
            body: {
                "postId": 1,
                "language": "hindi",
                "id": 4,
                "name": "chinmay deshpande",
                "email": "chinmaydeshpande",
                "body": "Minskole Institude"
            }
        }).as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment')

        // api --- sucessfullt hit -- response --- 200
        // firstName , lastName 
        // firstName , lastName , Age , RollNo

    })

    it.only('verify the getComment API with stubbed data :body using fixture ', function () {
        cy.intercept({
            url: "https://jsonplaceholder.cypress.io/comments/1",
            method: "GET"
        }, {
            statusCode: 200,
            body:payload
        }).as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment')

        // api --- sucessfullt hit -- response --- 200
        // firstName , lastName 
        // firstName , lastName , Age , RollNo

    })


    it.skip('verify the getComment API with stubbed data : status Code', function () {
        cy.intercept({
            url: "https://jsonplaceholder.cypress.io/comments/1",
            method: "GET"
        }, {
            statusCode: 404
        }).as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment')

        // api --- sucessfullt hit -- response --- 200
        // firstName , lastName 
        // firstName , lastName , Age , RollNo

    })




})