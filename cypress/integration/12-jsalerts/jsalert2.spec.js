/// <reference types="cypress" />
describe('verify the alert in javascript',function(){

    it('verify the normal js alert',function(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:alert',function(str){
            expect(str).to.eq('I am a JS Alert')
        })
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert',function(){
            return true
        })
        cy.get('#result').should('have.text','You successfully clicked an alert')

    })

    
    it('verify the confirm js alert with click on OK',function(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:confirm',function(str){
            expect(str).to.eq('I am a JS Confirm')
        })
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm',function(){
            return true
        })
        cy.get('#result').should('have.text','You clicked: Ok')

    })
        
    it('verify the confirm js alert with click on OK',function(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:confirm',function(str){
            expect(str).to.eq('I am a JS Confirm')
        })
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm',function(){
            return false
        })
        cy.get('#result').should('have.text','You clicked: Cancel')

    })

    it('verify the js confirm alert',function(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function(win){
            cy.stub(win,'prompt').returns('I am new to js')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('contain','I am new to js')

    })


    it('verify the js confirm alert',function(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function(win){
            cy.stub(win,'confirm').returns(true)
            cy.contains('Click for JS Confirm').click()
        })
        cy.get('#result').should('have.text','You clicked: Ok')

    })
    it('verify the js confirm alert',function(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function(win){
            cy.stub(win,'confirm').returns(false)
            cy.contains('Click for JS Confirm').click()
        })
        cy.get('#result').should('have.text','You clicked: Cancel')

    })







})