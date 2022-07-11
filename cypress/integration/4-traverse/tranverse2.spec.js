/// <reference types="cypress" />

describe('Tranverse', function () {

    it('To get children of DOM elements, use the .children() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().should('have.length', 5)

    })

    it('To get the first DOM element within elements, use the .first() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().first().should('have.text','Coffee')

    })

    it('To get the last DOM element within elements, use the .last() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().last().should('have.text','Sugar')

    })

    it('To get the last DOM element within elements, use the .last() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().eq(2).should('have.text','Milk')

    })

    it('To get a DOM element at a specific index, use the .eq() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().eq(2).should('have.text','Milk')

    })

    it('To get the next sibling DOM element within elements, use the .next() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').next().should('have.text',"Espresso")
    })

    it('To get the previous sibling DOM element within elements, use the .prev() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').prev().should('have.text',"Tea")
    })

    
    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#tea').nextAll().should('have.length',3)

    })
    // <h1 id = "one" class ="two" name ="nm">Hello<h1>
    it('To get all of the previous sibling DOM elements within elements, use the .prevAll() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#tea').prevAll().should('have.length',1).and('have.attr','id','coffee')

    })

    

    it.only('To get all sibling DOM elements of elements, use the .siblings() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#tea').siblings().should('have.length',4)

    })




})