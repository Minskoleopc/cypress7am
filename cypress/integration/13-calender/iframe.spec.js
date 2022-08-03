/// <reference types="cypress" />

describe('verify the iframe in cypress',function(){


    let getIframeBody = function(id){
        return cy.get(`#${id}`)
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
    }


    it('verify the iframe element using javascript ',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        //cy.get('a[href="index.html"]').click()
        cy.get('#frame').then(function(iframe){
            let body = iframe[0].contentDocument.body
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('a[href="index.html"]').should('have.text',"Home")
        })

    })

    it.skip('verify the iframe element using jquery ',function(){
        // ifram tagName -----> contents(document) ------> body ----> wrap----findElement
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function($iframe){
            let body = $iframe.contents().find('body')
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('a[href="index.html"]').should('have.text',"Home")
        })

    })

    it.only('verify the iframe element using jquery ',function(){
        // ifram tagName -----> contents(document) ------> body ----> wrap----findElement
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        getIframeBody('frame').then(function(bdy){
            cy.wrap(bdy).as('body')
            cy.get('@body').find('a[href="index.html"]').should('have.text',"Home")
        })
       

    })






})