///<reference types="cypress" />
describe('Tranverse method in cypress',function(){
    /*eq*/
    it('To get a DOM element at a specific index, use the .eq() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').find('li').eq(2).should('have.text','Banana')
        cy.get('.traversal-food-list').find('li').eq(0).should('have.text','Fruits')
    })
    /*first*/

    it('To get the first DOM element within elements, use the .first() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').find('li').first().should('have.text',"Fruits")
    })
     /*last*/

    it('To get the last DOM element within elements, use the .last() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').find('li').last().should('have.text',"Lentils")
    })

      /*children()*/
    it('To get children of DOM elements, use the .children() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().should('have.length',11)

    })
     /*next()*/
    it('To get the next sibling DOM element within elements, use the .next() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').next().should('have.text','Asparagus')
    
    })
    /*prev()*/

    it('To get the previous sibling DOM element within elements, use the .prev() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prev().should('have.text','Figs')
    
    })
    /*siblings()*/
    it('To get all sibling DOM elements of elements, use the .siblings() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').siblings().should('have.length',10)

    })

    /*nextAll()*/

    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').nextAll().should('have.length',4)

    })

    /*.preAll()*/

    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prevAll().should('have.length',6)

    })
    
    /*.prevUnti()*/
    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prevUntil('#fruits').should('have.length',5)

    })

    /*.prevUnti()*/
    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').nextUntil('#veggie').should('have.length',5)

    })

    it('To get descendant DOM elements of the selector, use the .find() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-job-list').find('.menu').find('.sales').should('have.text','Sales')
    })

    it.only('To get the closest ancestor DOM element, use the .closest() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.sales').closest('div').should('have.class','thumbnail')
    })

    it.only('To get DOM elements that match a specific selector, use the .filter() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-breadcrumb').children().filter('.active').should('have.text','Contact Us')
       
    })
    //div[data-toggle="buttons"]

    it.only('To remove DOM element(s) from the set of elements, use the .not() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('div[data-toggle="buttons"]').children('button').not('.active').should('have.length',3)
       
    })
    // parents()
    it.only('To get parents DOM element of elements, use the .parents() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').parents().filter('.container').should('have.length',1)
       
    })

    it.only('To get parent DOM element of elements, use the .parent() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').parent().should('have.class','traversal-food-list')
        
    })

    it.only('To get parents DOM element of elements until other element, use the .parentsUntil() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').parentsUntil('.col-sm-12').should('have.length',2)
        
    })

})