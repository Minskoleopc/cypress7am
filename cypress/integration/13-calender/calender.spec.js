/// <reference types="cypress" />

describe('verify the date selection in cypress',function(){


    it('verify the date picker ',function(){
      let date =   new Date()
        cy.log(date.getFullYear())
        cy.log(date.getMonth())
        cy.log(date.getDate())
        // 15 August 2023

        let date2  = new Date()
        date2.setDate(date2.getDate()+381)

        let year = date2.getFullYear()
        let numberMonth = date2.getMonth()
        let sDate = date2.getDate()
        let smonth = date2.toLocaleString("default",{month:"long"})

        cy.log(smonth)
        cy.log(year)
        cy.log(sDate)

        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()

        function selectMonthAndDate(){
            // "22 july".includes(2023)
            cy.get('.datepicker-switch').first().then(function(el){
                //cy.log(el.text())
                if(!el.text().includes(year)){
                    cy.get('.next').last().click({force:true})
                    selectMonthAndDate()
                }
            })
            cy.get('.datepicker-switch').first().then(function(el){
                //cy.log(el.text())
                if(!el.text().includes(smonth)){
                    cy.get('.next').last().click({force:true})
                    selectMonthAndDate()
                }
            })


        }

        function selectDate(){
            cy.contains(sDate).click()
        }




        selectMonthAndDate()
        selectDate()




    })





})