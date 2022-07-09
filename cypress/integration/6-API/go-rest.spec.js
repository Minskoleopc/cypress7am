

//4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9

describe('verify the  Go rest  API', function () {

    it.skip('verify the LIST User API', function () {

        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: `Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
            }

        }).then(function (res) {
            // cy.log(res)

            expect(res.status).to.eq(200)
            expect(res.body.length).to.eql(10)
            res.body.forEach(element => {
                expect(element).to.have.keys(["id", "gender", "name", "email", "status"])
            });
        })
    })

    it.skip('verify the CREATE User API', function () {

        let payload = {
            name: "Tenali Ramakrishna",
            gender: "male",
            email: `tenali${Math.random()*6}.ramakrishna@15ce.com`,
            status: "active"
        }

        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: `Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
            },
            body:payload
        }).then(function(response){

            expect(response.status).to.eqls(201)
            expect(response.body).to.have.keys(["id","name","email","gender","status"])
            // assertion on property value
            expect(response.body.id).not.eql(null)
            expect(response.body.name).to.eq(payload.name)
            expect(response.body.gender).to.eq(payload.gender)
            expect(response.body.status).to.eq(payload.status)
            expect(response.body.email).to.eq(payload.email)

            // res.body ==> obj ==> id ====> similar ....payload
        })


    })

    it.skip('verify the UPDATE User API', function () {


        let payload = {
            name: "Chinmay Deshpande",
            email: `tenali${Math.random()*6}.ramakrishna@15ce.com`,
            status: "active"
        }

        cy.request({
            method: "PUT",
            url: "https://gorest.co.in/public/v2/users/34384",
            headers: {
                Authorization: `Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
            },
            body:payload
        }).then(function(response){
            expect(response.status).to.eqls(200)
            expect(response.body).to.have.keys(["id","name","email","gender","status"])
            // assertion on property value
            expect(response.body.id).not.eql(null)
            expect(response.body.name).to.eq(payload.name)
            expect(response.body.status).to.eq(payload.status)
            expect(response.body.email).to.eq(payload.email)

        })

    })

    it.skip('verify the DELETE User API', function () {
        cy.request({
            method:"DELETE",
            url: "https://gorest.co.in/public/v2/users/34384",
            headers: {
                Authorization: `Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
            }
        }).then(function(res){
            expect(res.status).to.eqls(204)
        })
    })



    it('Verify End to End flow for API',function(){

        // create user
        let payload = {
            name: "Tenali Ramakrishna",
            gender: "male",
            email: `tenali${Math.random()*6}.ramakrishna@15ce.com`,
            status: "active"
        }

        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: `Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
            },
            body:payload
        }).then(function(response){
            expect(response.status).to.eqls(201)
            expect(response.body).to.have.keys(["id","name","email","gender","status"])
            // assertion on property value
            expect(response.body.id).not.eql(null)
            expect(response.body.name).to.eq(payload.name)
            expect(response.body.gender).to.eq(payload.gender)
            expect(response.body.status).to.eq(payload.status)
            expect(response.body.email).to.eq(payload.email)
            return response.body.id
            // res.body ==> obj ==> id ====> similar ....payload
        })
        .then(function(id){

            let payload = {
                name: "Chinmay Deshpande",
                email: `tenali${Math.random()*6}.ramakrishna@15ce.com`,
                status: "active"
            }
    
            cy.request({
                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                headers: {
                    Authorization: `Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
                },
                body:payload
            }).then(function(response){
                expect(response.status).to.eqls(200)
                expect(response.body).to.have.keys(["id","name","email","gender","status"])
                // assertion on property value
                expect(response.body.id).not.eql(null)
                expect(response.body.name).to.eq(payload.name)
                expect(response.body.status).to.eq(payload.status)
                expect(response.body.email).to.eq(payload.email)
                return response.body.id
            }).then(function(id){
                cy.request({
                    method:"DELETE",
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    headers: {
                        Authorization: `Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
                    }
                }).then(function(res){
                    expect(res.status).to.eqls(204)
                })



            })
    





        })





    })









})
