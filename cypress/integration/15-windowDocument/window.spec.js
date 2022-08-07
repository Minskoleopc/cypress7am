/// <reference types="cypress" />

describe('window commands',function(){

    it('verify location property of window',function(){
        cy.visit('https://automationteststore.com/')
        cy.window().then(function(win){
            //cy.log(win.location)
            expect(win.location.href).to.eq('https://automationteststore.com/')
            expect(win.location.host).to.eq('automationteststore.com')
            expect(win.location.pathname).to.eq('/')
            expect(win.location.protocol).to.eq('https:')
        })

    })

    it('verify location property of window',function(){
        cy.visit('https://automationteststore.com/')
        cy.window().then(function(win){
          win.location.reload()
        })

    })

    it('verify location property of window',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=65"]').click()
        cy.get('.maintext').should('contain','Books')
        cy.window().then(function(win){
            win.history.back()
            cy.url().should('eq', 'https://automationteststore.com/') 
            // win.history.go(-1)
            
        })
        cy.window().then(function(win){
             win.history.forward()
             cy.get('.maintext').should('contain','Books')

        })


    })

    it('verify location property of window',function(){
        cy.visit('https://automationteststore.com/')
        cy.location('href').should('eq','https://automationteststore.com/')
        cy.location('host').should('eq','automationteststore.com')
        cy.location('pathname').should('eq','/')
        cy.location('protocol').should('eq','https:')
    })

    it('verify location property of window',function(){
        cy.visit('https://automationteststore.com/')
        cy.reload()
    })

    it.only('verify location property of window',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=65"]').click()
        cy.get('.maintext').should('contain','Books')
        cy.go('back')
        cy.url().should('eq', 'https://automationteststore.com/') 
        cy.go('forward')
        cy.get('.maintext').should('contain','Books')
       
    })










})