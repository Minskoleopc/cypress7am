/// <reference types="cypress" />

describe('verify the API for getComment , post Comment , Update comment',function(){


    it('verify the GetComment API',function(){
        cy.request({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).then(function(response){
            expect(response.status).to.eq(200)
        })
    })

    
    it('verify the POSTComment API',function(){
        cy.request({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments",
            body:{
                "name": "Using POST in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
              }
        }).then(function(response){
            expect(response.status).to.eq(201)
        })
    })

    it('verify the UpdateComment API',function(){
        cy.request({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1",
            body:{
                "name": "update Using POST in cy.intercept()",
                "email": "updatehello@cypress.io",
                "body": "updateYou can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
              }
        }).then(function(response){
            expect(response.status).to.eq(200)
        })
    })


})