const faker = require('faker')
const Endpoint_PostClient = 'http://localhost:3000/api/client/new'
const Endpoint_GetClients = 'http://localhost:3000/api/clients'

    const name = faker.name.firstName()
    const email = faker.internet.email()
    const phone = faker.phone.phoneNumber()

    const payload = {
    "name": name,
    "email": email,
    "telephone":phone
    }
  

function CreateClientRequest(cy){
    
            //Post to create new client
            cy.request({
                method:"POST",
                url: Endpoint_PostClient,
                headers: {
                    'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                },
                body:payload

            }).then((response => {
                expect(response.status).to.eq(200) //only verify if status = OK
            }))

}

function getRequestLastCreatedClientWithAssertions(cy){
    cy.request({
        method:"GET",
        url: Endpoint_GetClients,
        headers: {
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },
        
    }).then((response => {
        const bodyLength = response.body.length //how much the length of the array is.
        const ResponseAsString = JSON.stringify(response.body[bodyLength - 1]) //Only checks last created customer.
        expect(ResponseAsString).to.have.string(payload.name) //Verify correct new customer is created.
        expect(ResponseAsString).to.have.string(payload.email)
        expect(ResponseAsString).to.have.string(payload.telephone)

    }))

}


module.exports = {
    getRequestLastCreatedClientWithAssertions,
    CreateClientRequest

}