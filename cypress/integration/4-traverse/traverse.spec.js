describe('Tranverse method in cypress',function(){


    it('To get a DOM element at a specific index, use the .eq() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').find('li').eq(2).should('have.text','Banana')
        cy.get('.traversal-food-list').find('li').eq(0).should('have.text','Fruits')
    })

    it('To get the first DOM element within elements, use the .first() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').find('li').first().should('have.text',"Fruits")
    })

    it('To get the last DOM element within elements, use the .last() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').find('li').last().should('have.text',"Lentils")
    })

    it('To get children of DOM elements, use the .children() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().should('have.length',11)

    })
    it('To get the next sibling DOM element within elements, use the .next() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').next().should('have.text','Asparagus')
    
    })

    it('To get the previous sibling DOM element within elements, use the .prev() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prev().should('have.text','Figs')
    
    })
    it('To get all sibling DOM elements of elements, use the .siblings() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').siblings().should('have.length',10)

    })

    // 

    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').nextAll().should('have.length',4)

    })

    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prevAll().should('have.length',6)

    })

    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prevUntil('#fruits').should('have.length',5)

    })

    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').nextUntil('#veggie').should('have.length',5)

    })








    // 

    // eq() --- multiple ---> index select
    // first() --- multiple elements --- select first
    // last() --- multiple elements -- select last 
    // prev() --- previous sibling 
    // next() ---- next sibling 
    // children() ------> total number of children from given element








})