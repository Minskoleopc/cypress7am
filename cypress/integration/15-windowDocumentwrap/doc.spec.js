/// <reference types="cypress" />

describe('verify the  title',function(){
    before(function(){
        cy.visit('https://webdriveruniversity.com/')
    })

    it('Verify the title of page',function(){
        cy.document().then(function(doc){
            //cy.log(doc.title)
            expect(doc.title).to.eq('WebDriverUniversity.com')
        })

    })

    it('Verify the title of page',function(){
        cy.title().then(function(str){
            expect(str).to.eq('WebDriverUniversity.com')
        })
    })

    it('Validate Height and Width of Page',function(){
        cy.document().then(function(doc){
            let jq = Cypress.$(doc)
            cy.log(jq.width())
            cy.log(jq.height())
        })
    })

    it('Validate Height and Width of Page',function(){
      cy.viewport('iphone-6','portrait')
      cy.viewport('iphone-6','landscape')
      cy.viewport(1500,4000,'landscape')
    })

    it.only('Cookie with document',function(){
        cy.document().then(function(doc){
            //cy.log(doc.cookie)
            // setting the cookie
            doc.cookie = "minksole = cypress"
            cy.log(doc.cookie)
            // update 
            doc.cookie = "minksole = cypress7am"
            cy.log(doc.cookie)
            doc.cookie = "minskole="
            cy.log(doc.cookie)
        }) 

    })

    it.only('Cookie with document',function(){
        cy.setCookie('selenium','batchOne')
        cy.getCookie('selenium')
        cy.setCookie('selenium','batchTwo')
        cy.getCookie('selenium')
        cy.clearCookie('selenium')
    })










})