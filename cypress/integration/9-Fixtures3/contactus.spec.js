/// <reference types="cypress" />

describe('verify the conatact us with different data',function(){

    it('same testcase with different data',function(){

        cy.fixture('users').then(function(users){
            //cy.log(users)

            users.forEach(element => {
                cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
                cy.get('input[name = "first_name"]').type(element.firstName)
                cy.get('input[name = "last_name"]').type(element.lastName)
                cy.get('input[name = "email"]').type(element.email)
                cy.get('textarea[name = "message"]').type(element.message)
                cy.get('input[type="submit"]').click()
                cy.get('h1').should('have.text', 'Thank You for your Message!')
        
            });



        })


    })




})