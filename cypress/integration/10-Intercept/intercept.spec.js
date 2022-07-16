/// <reference types="cypress" />

describe('verify the intercept concept',function(){

    it('verify the get Comment functionality',function(){
        cy.intercept({
            "method":"GET",
            "url":"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Get Comment').click()
        cy.wait('@getComment')
        cy.get('.network-comment')
        .should('contain',`laudantium`)

    })

    
    it('verify the get Comment functionality',function(){
        cy.intercept({
            "method":"GET",
            "url":"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function({response,request}){
             cy.log(response)
             //cy.log(request)
            expect(response.statusCode).to.eql(200)
            cy.get('.network-comment')
            .should('have.text',response.body.body)
        })

    })
 
    
    it('verify the get Comment functionality',function(){
        cy.intercept({
            "method":"POST",
            "url":"https://jsonplaceholder.cypress.io/comments"
        }).as('postComment')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Post Comment').click()
        cy.wait('@postComment').then(function({response,request}){
             //cy.log(response)
             //cy.log(request)
            expect(response.statusCode).to.eql(201)
            cy.get('.network-post-comment')
            .should('have.text','POST successful!')
        })

    })

     
    it.only('verify the get Comment functionality',function(){
        cy.intercept({
            "method":"PUT",
            "url":"https://jsonplaceholder.cypress.io/comments/1"
        }).as('updateComment')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Update Comment').click()
        cy.wait('@updateComment').then(function({response,request}){
            expect(response.statusCode).to.eql(200)
           
        })

    })
 



})