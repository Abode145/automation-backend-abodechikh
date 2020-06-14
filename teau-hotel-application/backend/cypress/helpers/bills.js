const faker = require('faker')
const Endpoint_PostBill = 'http://localhost:3000/api/bill/new'
const Endpoint_GetBills = 'http://localhost:3000/api/bills'
const Endpoint_GetBill = 'http://localhost:3000/api/bill/'


    const Price = faker.random.number()

    const payload = {
        "value":Price
        ,"paid": false
        }

        
    
    function CreateBillRequest(cy){
    
        cy.request({
            method:"POST",
            url: Endpoint_PostBill,
            headers: {
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
            body:payload
    
        }).then((response => {
            expect(response.status).to.eq(200) //only verify if status = OK
            
           
        }))
        
    }
    
  

    module.exports = {
        CreateBillRequest
    
    }