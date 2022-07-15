/// <reference types="cypress" />

describe('Writing to fixture', function () {
    it('verify the writing to fixture file', function () {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then(function (res) {
            cy.writeFile('cypress/fixtures/users3.json',res.body)
        })

        cy.fixture('users3').then(function(res){
            expect(res.data.length).to.eqls(6)
        })

    })
})