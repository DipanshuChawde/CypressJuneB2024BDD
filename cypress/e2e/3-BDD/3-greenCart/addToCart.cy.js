///<reference types='cypress' />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';


Given('Navigate to web page', () => {
cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
})

When('i type ca in search box click on search button', () => {
cy.get('[class="search-keyword"]').type('ca')
cy.get('[class="search-button"]').click()
cy.wait(2000)
})


And('i select cashwe and add to cart', () => {
cy.get('[class="products"]  > .product').each((el,index)=>{
//cy.log(el.find('h4').text())
if(el.find('h4').text().includes('Cashews')){
    cy.get('[class="product-action"] > button').eq(index).click()
}
})
})


And('i proceed to check out', () => {
cy.get('[alt="Cart"]').click()
cy.contains('PROCEED TO CHECKOUT').click()

cy.get('table[class="cartTable"] > tbody > tr').each((el,index)=>{
    //cy.log(el.find('td').eq(1).text())
    expect(el.find('td').eq(1).text()).include('Cashews')
})

cy.contains('Place Order').click()
cy.wait(2000)
cy.get('select').select('India')
cy.wait(2000)
cy.get('[class="chkAgree"]').click()
cy.contains('Proceed').click()

})


Then('i validate checkout page', () => {
cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!")
.should('be.visible')
})