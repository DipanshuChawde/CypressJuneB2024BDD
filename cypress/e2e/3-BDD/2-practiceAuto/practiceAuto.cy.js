///<reference types='cypress' />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('i navigate to login page', function () {
    cy.visit('https://practice.automationtesting.in/my-account/')
})


When('i enter login uid and pw', function () {
    cy.get('[id="username"]').type('dipanshu33@gmail.com')
    cy.get('[id="password"]').type('dipanshu@123')
})

And('i clickon login button', function () {
    cy.get('[name="login"]').click()
})

Then('i verify login page', function () {

    let email = 'dipanshu33@gmail.com'
    let uid = email.split("@")
    cy.get('strong').should('have.text', uid[0])

})

//----------Scenario 2-------------------

When('i enter login {word} and {word}', (uid, pw) => {
    cy.get('[id="username"]').type(uid)
    cy.get('[id="password"]').type(pw)

})

Then('i verify login page {word}', (em) => {

    let email = em
    let uid = email.split("@")
    cy.get('strong').should('have.text', uid[0])
})


//----------Scenario 3-------------------
When('i enter login1 {string} and {string}', (uid, pw) => {
    cy.get('[id="username"]').type(uid)
    cy.get('[id="password"]').type(pw)

})

Then('i verify login page1 {string}', (em) => {

    let email = em
    let uid = email.split("@")
    cy.get('strong').should('have.text', uid[0])
})