/// <reference types="cypress" />

import * as ClientHelper from '../helpers/clientHelper'
import * as LogOut from '../helpers/logOut'

//validToken
describe('testing backend', function(){
        
    afterEach(() =>{
        LogOut.LogOut(cy)
    })

    it('Create new client', function(){
        cy.validToken().then(( response => {

            
            ClientHelper.CreateClientRequest(cy)
        }))

    })

    it('Create and delete client', function(){
        cy.validToken().then(( response => {

            
            ClientHelper.CreateClientRequestAndDelete(cy)

        }))

    })


})//CreateClientRequestAndEdit