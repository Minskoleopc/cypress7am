

// understanding the application
// write testscenario
// testcase 
// testcase execution

// Testing 

// manually 
// cy.request()
// localhost:49265 --- UI 
// e2e -- intercept and api

// operation -

// to get all Todo
// adding the Todo
// udpdate toDo
// delete toDo

// graphql -- API 
// url same ---- get and post
/// <reference types="cypress" />


describe('verify the graphql apis ',function(){

    it('allToDo',function(){
        cy.request({
            method:"POST",
            url:"http://localhost:3000/",
            body:{
                operationName:'allTodos',
                query:`query allTodos {
                    allTodos {
                      id
                      title
                      completed
                      __typename
                    }
                  }`,
                  variables:{}
            }

        }).then(function(res){
            //cy.log(res.body.data.allTodos.length)
            expect(res.status).to.eq(200)
            expect(res.body.data.allTodos.length).to.eq(2)
        })

    })

    it('addToDO',function(){

    })
    it('UpdateToDo',function(){

    })

    it('deleteTodo',function(){

    })
})








