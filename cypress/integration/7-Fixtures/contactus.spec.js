import obj from "../../fixtures/contactus.json"
//import {info} from "../../fixtures/contact"
describe('verify functionality for contactus form', function () {
    // let is blocked 
    // const is also blocked scope
    let data= undefined
    before(function(){
        cy.fixture('contactus').then((res) => {
            //cy.log(res)
            data = res
        })
    })


    let info = {

        first_name: "amol",
        last_name: "rao",
        email: "amolrao010@gmail.com",
        message: "Hello I am learning JS"

    }




    it('verify the functionality for contact us form', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name = "first_name"]').type('amol')
        cy.get('input[name = "last_name"]').type('rao')
        cy.get('input[name = "email"]').type('amolrao@gmail.com')
        cy.get('textarea[name = "message"]').type('hello i am learning javascript')
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })

    it('verify the functionality for contact us form', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name = "first_name"]').type(info.first_name)
        cy.get('input[name = "last_name"]').type(info.last_name)
        cy.get('input[name = "email"]').type(info.email)
        cy.get('textarea[name = "message"]').type(info.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })

    it('verify the contact us form from fixture file in particular testcase', function () {
        cy.fixture('contactus').then(function (res) {
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name = "first_name"]').type(res.firstName)
            cy.get('input[name = "last_name"]').type(res.lastName)
            cy.get('input[name = "email"]').type(res.email)
            cy.get('textarea[name = "message"]').type(res.message)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })

    })

    it('verify the contact us form from fixture - Before Each', function () {

        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name = "first_name"]').type(res.firstName)
        cy.get('input[name = "last_name"]').type(res.lastName)
        cy.get('input[name = "email"]').type(res.email)
        cy.get('textarea[name = "message"]').type(res.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')


    })

    it('verify the contact us form from fixture - Before Each', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name = "first_name"]').type(data.firstName)
        cy.get('input[name = "last_name"]').type(data.lastName)
        cy.get('input[name = "email"]').type(data.email)
        cy.get('textarea[name = "message"]').type(data.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })

    it('verify the contact us form from fixture - Import', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name = "first_name"]').type(obj.firstName)
        cy.get('input[name = "last_name"]').type(obj.lastName)
        cy.get('input[name = "email"]').type(obj.email)
        cy.get('textarea[name = "message"]').type(obj.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })

    it.skip(' Error -verify the contact us form from fixture - Import js file', function () {
        //cy.log(obj2)
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name = "first_name"]').type(info.firstName)
        cy.get('input[name = "last_name"]').type(info.lastName)
        cy.get('input[name = "email"]').type(info.email)
        cy.get('textarea[name = "message"]').type(info.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it.skip('BeforeEach = fixture read', function () {
       
    })






})