Feature: verify add to cart functionality


    Scenario: verify add to cart functionality for cashwe
        Given Navigate to web page
        When i type ca in search box click on search button
        And i select cashwe and add to cart
        And i proceed to check out
        Then i validate checkout page

@focus
    Scenario Outline: verify add to cart functionality for multiple products
        Given Navigate to web page
        When i type <SearchBxIp> in search box click on search box
        And i select <products> and add to cart
        And i proceed to checkout <products>
        Then i validate checkout page 


        Examples:
            | SearchBxIp | products         |
            | st         | Strawberry,Pista |
            | ba         | Banana           |
            | al         | Almonds          |
