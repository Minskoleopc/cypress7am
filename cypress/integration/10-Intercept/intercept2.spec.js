/// <reference types="cypress" />

describe('verify the count of users',function(){

    beforeEach(function(){
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.typicode.com/posts"
        },{
            body:{firstName:"chinmay",age:32}
        }).as('getUsers')
    })

    it.skip('verify the total number of user',function(){
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.contains('/posts').click()
        cy.wait('@getUsers').then(function({response,request}){
           // cy.log(response)
           expect(response.statusCode).to.eq(200)
        })
        cy.get('@getUsers').then(function({response}){
            //cy.log(response)
            expect(response.body.length).to.eqls(100)
        })
    })

    it.skip('verify the total number of user',function(){
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.contains('/posts').click()
        cy.wait('@getUsers').then(function({response,request}){
           expect(response.statusCode).to.eq(200)
        })
        cy.get('@getUsers').then(function({response}){
            //cy.log(response)
            expect(response.body.length).to.eqls(100)
        })
    })

    it.only('verify the total number of user',function(){

        cy.intercept('GET','https://jsonplaceholder.typicode.com/posts',{fixture:"intercept"})
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.contains('/posts').click()
        cy.wait('@getUsers').then(function({response,request}){
           expect(response.statusCode).to.eq(200)
        })
        cy.get('@getUsers').then(function({response}){
            //cy.log(response)
            expect(response.body.length).to.eqls(100)
        })
    })


 





})