const faker = require('faker')
const Endpoint_PostClient = 'http://localhost:3000/api/client/new'
const Endpoint_GetClients = 'http://localhost:3000/api/clients'
const Endpoint_GetClient = 'http://localhost:3000/api/client/'


    const name = faker.name.firstName()
    const email = faker.internet.email()
    const phone = faker.phone.phoneNumber()

    const payload = {
    "name": name,
    "email": email,
    "telephone":phone
    }
  