///<reference types="cypress" />
// testscenario 
// testcase 

describe('verify the login functionality',function(){

    it('validate login with correct credentails',function(){
        // steps goes here
        // <input name="txtUsername" id="txtUsername" type="text">
        // <h1 id= "one"  class = "two" name = "nm">heading</h1>
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('h1').should('be.visible').and('have.text','Dashboard')

    })

    it('validate login with invalid credentials',function(){
        // step goes here
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin111')
        cy.get('#btnLogin').click()
        cy.get('#spanMessage').should('be.visible').and('have.text','Invalid credentials')

    })



})