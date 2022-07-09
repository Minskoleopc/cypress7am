// assertion 
// unit , intergration , end to end testing
// unit class or function (component testing)  ==> integration ====> user behaviour 

describe('verify the functionality of api',function(){
    it('verify the count of user via API',function(){
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then(function({status,headers,duration,body}){
            
            // cy.log(status)
            // cy.log(headers)
            // cy.log(duration)

            cy.log(body)
            expect(status).to.eql(200)
            expect(duration).to.be.within(15, 100)
            //expect(duration).to.be.lessThan(200) no recommened
            expect(body).to.have.keys(["data","page","per_page","support","total","total_pages"])
            body.data.forEach(element => {
             expect(element).to.have.keys(["id","first_name","last_name","email","avatar"])
               expect(element.first_name).not.to.eql(null)
               expect(element.last_name).not.to.eql(null)
               expect(element.email).not.to.eql(null)
               expect(element.id).not.to.eql(null)
               expect(element.avatar).not.to.eql(null)

            });

            expect(headers).to.have.property('content-type','application/json; charset=utf-8')


            // create ====>  POST ----> firstName, lastName , email  , avartar
            // response -- id 
            // id user --- getSingle ---firstName, lastName , email  , avartar

        })

    })

 
})


// ----------------------------------------------------------------

// destructure

// let arr = ["chinmay","poorva","ram"]
// let [aa,bb,cc] = arr
// console.log(aa)
// console.log(bb)
// console.log(cc)

// let a =arr[0]
// console.log(a)

// let b = arr[1]
// console.log()

// let  c = arr[2]
// console.log(c)

// let person = {
//     firstName:"chinmay",
//     lastName:"deshapnde",
//     age:23,
//     rollNo:33
// }


// let {firstName:fn,lastName:ln,age:ag,rollNo:rn} = person
// console.log(fn)
// console.log(ln)
// console.log(ag)
// console.log(rn)

// let {firstName,lastName,age,rollNo} = person
// console.log(firstName)
// console.log(lastName)
// console.log(age)
// console.log(rollNo)




// let a = person.firstName
// let b = person.lastName
// let c = person.age
// let d =person.rollNo

// {
//     "date": "Fri, 08 Jul 2022 02:25:29 GMT",
//     "content-type": "application/json; charset=utf-8",
//     "transfer-encoding": "chunked",
//     "connection": "keep-alive",
//     "x-powered-by": "Express",
//     "access-control-allow-origin": "*",
//     "etag": "W/\"406-ut0vzoCuidvyMf8arZpMpJ6ZRDw\"",
//     "via": "1.1 vegur",
//     "cache-control": "max-age=14400",
//     "cf-cache-status": "HIT",
//     "age": "235",
//     "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
//     "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lHkqCNVGVtDLTHAaDaWlQs52MnrCC%2BK2hYI560kD5IfTdknouV1R4nNAZOmyrmnF8BBdf7kTLgIrSNwbvlV1tK8LcwiJpxWHb1whBlm%2FptmXCWfNJjmDjMV42A%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
//     "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
//     "vary": "Accept-Encoding",
//     "server": "cloudflare",
//     "cf-ray": "72755e9d98c78608-BOM",
//     "content-encoding": "gzip"
// }