/// <reference types="cypress" />

// Create Client and Secret Id
// API --- POST --- Generate--- token
// Call other APIS with this token
//https://developer.paypal.com/api/rest/authentication/
//Basic QVFIQzFjM0FkZmV6R2VlTzJtS2FiYVRoVGZsUTFOSU93dVZvNVI1bTRiQmpoOUpXZHhvTURoaXh4QUN5bHdqM2wtamxuckthUXVsZVpkNGg6RUtpeWE4R0k5WTdjWFEyVHFTT1hETmtTTFprOERwazJfSGt2UHNrZVd3N0NiTFI5Y3ROZGc1c1N2RlFyY2pRX21SQ3JCcGVnSjBTY0pHdWY=

// Steps

// Sign - up to developer's account

// https://developer.paypal.com/developer/accounts/
// Create App (https://developer.paypal.com/developer/accounts/)
// Creating App will give you client ID and secret ID
// Using client Id Secret ID - call GenerateToken API  (https://developer.paypal.com/api/rest/)
// Call generate token API
// Using Token Call other Paypal API


describe('validate the Pay api',function(){

    let token  = undefined
    it('validate the Generate Token API',function(){
        cy.request({
            method:"POST",
            url:"https://api-m.sandbox.paypal.com/v1/oauth2/token",
            headers:{
                "Authorization":"Basic QVFIQzFjM02VlTzJtS2FiYVRoVGZsUTFOSU93dVZvNVI1bTRiQmpoOUpXZHhvTURoaXh4QUN5bHdqM2wtamxuckthUXVsZVpkNGg6RUtpeWE4R0k5WTdjWFEyVHFTT1hETmtTTFprOERwazJfSGt2UHNrZVd3N0NiTFI5Y3ROZGc1c1N2RlFyY2pRX21SQ3JCcGVnSjBTY0pHdWY="
            },
            body:{
                grant_type:'client_credentials'
            },
            form:true

        }).then(function(res){
            token = res.body.access_token
            cy.log(res.body.access_token)
        })

    })

    it('Valdidate the GET invoice API',function(){
        cy.request({

            method:"GET",
            url:"https://api-m.sandbox.paypal.com/v2/invoicing/invoices?total_required=true",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }

        }).then(function(res){
            //cy.log(res)
            expect(res.status).to.eqls(200)
            expect(res.body).to.have.keys(["total_pages","total_items"])
        })



    })



})











