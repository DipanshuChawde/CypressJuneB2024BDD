/// <reference types='cypress' />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('I navigate to web page', () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
})

When('I enter data for all fields', () => {
    cy.get('[name="first_name"]').type('dipanshu')
    cy.get('[name="last_name"]').type('chawde')
    cy.get('[name="email"]').type('dipanshu@gmail.com')
    cy.get('[name="message"]').type('cypress with bdd')
})

And('I click on submit button', () => {
cy.get('[type="submit"]').click()
})

Then('I verify validation message', () => {
 cy.get('h1').should('have.text','Thank You for your Message!')
})


When('I enter data from data table for all fields',(datatable)=>{
    datatable.hashes().forEach((el) => {
        cy.get('[name="first_name"]').clear().type(el.fn)
    cy.get('[name="last_name"]').clear().type(el.ln)
    cy.get('[name="email"]').clear().type(el.email)
    cy.get('[name="message"]').clear().type(el.msg)
    });
})