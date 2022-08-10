/// <reference types="cypress" />

describe('Cypress wrap command',function(){


    let sum = function (x,y){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve(x+y)
            },2000)
        })
    }




    it('wrap the jquery element',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').then(function($el){
            $el.val('hello')
            cy.wrap($el).should('have.value',"hello")
        })

    })

    it('verify the wrap for string , object and array',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').then(function($el){
            let q1 = $el.text()
            //expect(q1).to.to.eq('CONTACT US')
            cy.wrap(q1).should('eq','CONTACT US')
            
        })

    })

    it.only('verify the wrap for  array',function(){
        let arr = []
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list > li').each(function(el){
            arr.push(el.text())
        }).then(function(){
            cy.log(arr)
            cy.wrap(arr).should('have.length','5')
            cy.wrap(arr).should('include','Coffee')
        })

    })

    it.only('verify the wrap for  object',function(){
        // api -- response ----> json
        cy.fixture('example').then(function(obj){
            cy.wrap(obj).should('have.a.property','email','hello@cypress.io')
        })

    })

    it.only('verify the wrap for  object',function(){
        // api -- response ----> json
        cy.fixture('example').then(function(obj){
            cy.wrap(obj).should('have.a.property','email','hello@cypress.io')
        })

    })

    it.only('verify the wrap for  object',function(){
        let p = sum(1,4)
        cy.wrap(p).should('eq',5)
        
    })



})