  Feature: verify green cart web page using pom
  
      
  Scenario Outline: verify add to cart functionality for multiple products using Pom
        Given Navigate to web page pom
        When i type <SearchBxIp> in search box click on search box pom
        And i select <products> and add to cart pom
        And i proceed to checkout <products> pom
        Then i validate checkout page pom


        Examples:
            | SearchBxIp | products         |
            | st         | Strawberry,Pista |
            | ba         | Banana           |
            | al         | Almonds          |
