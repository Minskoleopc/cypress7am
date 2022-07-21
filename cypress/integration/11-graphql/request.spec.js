

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


describe('verify the graphql apis ', function () {

    it('allToDo', function () {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/",
            body: {
                operationName: 'allTodos',
                query: `query allTodos {
                    allTodos {
                      id
                      title
                      completed
                      __typename
                    }
                  }`,
                variables: {}
            }

        }).then(function (res) {
            //cy.log(res.body.data.allTodos.length)
            expect(res.status).to.eq(200)
            expect(res.body.data.allTodos.length).to.eq(2)
        })

    })

    it('addToDO', function () {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/",
            body: {
                operationName: "AddTodo",
                query: `mutation AddTodo($title: String!) {
                    createTodo(title: $title, completed: false) {
                      id
                      __typename
                    }
                  }`,
                variables: {
                    "title": "cypress"
                }
            }
        }).then(function (response) {
            // let obj = response.body.data
            //cy.log(obj.createTodo)
            expect(response.status).to.eq(200)
            expect(response.body.data.createTodo).to.haveOwnProperty('id')
        })
    })


    it('UpdateToDo', function () {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/",
            body: {
                operationName: 'allTodos',
                query: `query allTodos {
                    allTodos {
                      id
                      title
                      completed
                      __typename
                    }
                  }`,
                variables: {}
            }

        }).then(function (res) {
            expect(res.status).to.eq(200)
            let id = res.body.data.allTodos[0].id
            return id
        }).then(function (id) {
            cy.request({

                method: "POST",
                url: "http://localhost:3000/",
                body: {
                    operationName: 'updateTodo',
                    query: `mutation updateTodo($id: ID!, $completed: Boolean!) {
                        updateTodo(id: $id, completed: $completed) {
                          id
                          title
                          completed
                          __typename
                        }
                      }`,
                    variables: {
                        "id": `${id}`,
                        "completed": true
                    }
                }

            }).then(function (res) {
                cy.log(res)
            })

        })



    })

    it.only('deleteTodo', function () {

        cy.request({
            method: "POST",
            url: "http://localhost:3000/",
            body: {
                operationName: 'allTodos',
                query: `query allTodos {
                    allTodos {
                      id
                      title
                      completed
                      __typename
                    }
                  }`,
                variables: {}
            }

        }).then(function (res) {
            expect(res.status).to.eq(200)
            let id = res.body.data.allTodos[0].id
            return id
        }).then(function (id) {

            cy.request({
                method: "POST",
                url: "http://localhost:3000/",
                body: {
                    operationName: 'DeleteTodo',
                    query: `mutation DeleteTodo($id: ID!) {
                        removeTodo(id: $id) {
                          id
                          __typename
                        }
                      }`,
                    variables: {
                        "id": `${id}`
                    }
                }

            }).then(function(response){
                expect(response.status).to.eq(200)
            })

        })



    })
})








