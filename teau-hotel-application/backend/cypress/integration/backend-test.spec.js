/// <reference types="cypress" />

import * as ClientHelper from '../helpers/clientHelper'

//validToken
describe('testing backend', function(){


    it('Create new client', function(){
        cy.validToken().then(( response => {

            
            ClientHelper.CreateClientRequest(cy)
            ClientHelper.getRequestLastCreatedClientWithAssertions(cy)


        }))

    })

})