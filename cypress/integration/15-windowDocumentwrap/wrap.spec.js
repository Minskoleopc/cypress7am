/// <reference types="cypress" />

//const { Promise } = require("cypress/types/bluebird")

describe('verify the wrap function in cypress', function () {
    let getInfo = function(x,y){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve(x+y)
            },2000)
        })
    }


    it('verify the cypress wrap element ', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').then(function (el) {
            el.val('hello')
            cy.wrap(el).type('hello')
        })
    })

    it('verify the cypress wrap element ', function () {

        // string
        let name = "chinmay deshpande"
        cy.wrap(name).should('eq', 'chinmay deshpande')

        // object
        let info = { firstName: "chinmay", lastName: "deshpande" }
        cy.wrap(info).should('have.a.property',"firstName",'chinmay')
        cy.wrap(info).should('have.a.property',"lastName",'deshpande')

        // Array
        let names = ["chinmay","poorva","ram"]
        cy.wrap(names).should('include',"poorva")

        
        let a1 = getInfo(10,10)
        // cypress
        // wrap helps to wait until asyn call is finished, for sychronus execution
        cy.wrap(a1).should('eq',20)

        // javacript 
        // getInfo(12,13).then(function(a){
        //     expect(a).to.eq(20)
        // })
    })

    it.only('verify the cypress wrap element ', function () {
        expect(1).to.eq(2)
    })


})