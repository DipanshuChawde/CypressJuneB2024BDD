///<reference types='cypress' />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import hp from "../../pages/greenCartPage"

let gk = new hp

Given("Navigate to web page pom", () => {
    gk.visitUrl()
})


When("i type {word} in search box click on search box pom", (sb) => {
    gk.searchForProduct(sb)
})


And("i select {word} and add to cart pom", (pr) => {
   gk.addToCart(pr)
})


And("i proceed to checkout {word} pom", (prod) => {
   gk.proceedToCkout(prod)
})

Then("i validate checkout page pom", () => {
   gk.validation()
})