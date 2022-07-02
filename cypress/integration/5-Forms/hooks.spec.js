///<reference types="cypress" />


describe('hooks in cypress',function(){

    before(function(){
        cy.log('I will run before everthing')
    })

    beforeEach(function(){
        cy.log('i will before each testcase')
    })

    afterEach(function(){
        cy.log('this will run after each testcase')
    })

    after(function(){
        cy.log('This will run after all testcases')
    })

    it('testcase one name',function(){
        cy.log('testcase one eexcution')
    })

    it('testcase one name',function(){
        cy.log('testcase two eexcution')
    })
    



})