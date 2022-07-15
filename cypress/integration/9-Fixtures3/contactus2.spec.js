import data from '../../fixtures/users.json'
/// <reference types="cypress" />

describe('verify the data with various testcase',function(){

    data.forEach(function(element,index){

        it(`verify the contact us form with test-data${index+1}`,function(){
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name = "first_name"]').type(element.firstName)
            cy.get('input[name = "last_name"]').type(element.lastName)
            cy.get('input[name = "email"]').type(element.email)
            cy.get('textarea[name = "message"]').type(element.message)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })


    })





})

