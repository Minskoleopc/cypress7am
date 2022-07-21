/// <reference types="cypress" />

describe('verify the UI',function(){

    it('verify the number of Todo',function(){

        cy.visit('http://localhost:1234/')
        cy.get('.todo').should('have.length',27)


    })

    it('add new to do',function(){
        let text = 'cypress new'
        cy.visit('http://localhost:1234/')
        cy.get('.new-todo').type(text)
        cy.get('.new-todo').type('{enter}')
        cy.wait(5000)
        cy.reload()
        cy.get('.todo').last().should('have.text',text)
    })

    it.only('update existing todo',function(){
        cy.visit('http://localhost:1234/')
        cy.get('.todo').first().find('div').find('input').click()
        cy.get('.todo').first().should('have.class','completed')
    })

    it('delete',function(){


    })




})