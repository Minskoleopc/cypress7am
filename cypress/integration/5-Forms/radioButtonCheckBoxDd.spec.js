///<reference types="cypress" />

describe('verufy the functionality of checkbox, radio Button and Drop down', function () {

    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    it('verify the functionality for the checkbox', function () {
        cy.get('input[value="option-3"]').should('be.checked')
        
    })
    
    it('verify the functionality for the checkbox with ', function () {
        cy.get('input[value="option-1"]').click().should('be.checked')     
        cy.get('input[value="option-1"]').click().should('be.not.checked')
    })

    // check()  
    // uncheck()
    it('verify the functionality for the checkbox with check() uncheck() ', function () {
        cy.get('input[value="option-2"]').check().should('be.checked')     
        cy.get('input[value="option-2"]').uncheck().should('not.be.checked')
    })

    it('verify the functionality  to mutiple checkboxes ', function () {
        cy.get('#checkboxes').find('input[type="checkbox"]').each(function(el,index,arr){
            cy.wrap(el).check().should('be.checked')
            cy.wrap(el).uncheck().should('not.be.checked')
        })
    })

    it('verify the functionality  to mutiple checkboxes ', function () {
        cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4'])
        cy.get('input[type="checkbox"]').uncheck(['option-1','option-2','option-3','option-4'])
    })

    
    it('verify the functionality for radio  with click()', function () {
        cy.get('input[value="green"]').click().should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')
    })

    
    it('verify the functionality for radio  with check()', function () {
        cy.get('input[value="green"]').check().should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')
    })

    it('verify the functionality for all the radio buttons', function () {
        cy.get('#radio-buttons').find('input').each(function(el,index){
            cy.wrap(el).check().should('be.checked')
        })
        cy.get('#radio-buttons').first().should('not.be.checked')
    })



    // we can select the drop down values by text and by value attribute
    // conventional drop and the select method will work if the tag is select

    it('verify the functionality for all the radio buttons', function () {
        // by text
       cy.get('#dropdowm-menu-1').select('Python').should('have.value','python')
       // by value
       cy.get('#dropdowm-menu-1').select('sql').should('have.value','sql')
    })

    it('verify the selection for all the dropdown',function(){
        let selectValues = ['python','testng','javascript']
        cy.get('.section-title').first().children().each(function(el,index){
            cy.wrap(el).select(selectValues[index]).should('have.value',selectValues[index])
        })
    })

    it('verify the functionality to check whether the element is enabled or disable',function(){
        cy.get('input[value="cabbage"]').should('be.disabled')
    })
  
    it.only('verify whether the drop down value is disabled',function(){
        cy.get('#fruit-selects').children()
        .filter('option[disabled="disabled"]')
        .should('have.text',"Orange").and('be.disabled')

    })
})