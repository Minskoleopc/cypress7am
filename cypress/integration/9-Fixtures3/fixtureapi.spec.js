/// <reference types="cypress" />
import data from '../../fixtures/users2.json'

describe('Using fixture file for data creation',function(){

    data.forEach(function(element,index){

        it(`verify the usercreation with test-data ${index+1}`,function(){

            cy.request({
                method:"POST",
                url:"https://reqres.in/api/users",
                body:element
            }).then(function(response){
                expect(response.status).to.eqls(201)
            })

        })



    })



})