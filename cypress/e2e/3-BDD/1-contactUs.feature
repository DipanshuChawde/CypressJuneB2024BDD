Feature: I want to verify web driver university contact us page

    Scenario: I want to verify page for valid data
        Given I navigate to web page
        When I enter data for all fields
        And I click on submit button
        Then I verify validation message

    Scenario: I want to verify for datatable
        Given I navigate to web page
        When I enter data from data table for all fields
            | fn     | ln     | email            | msg             |
            | tanish | chawde | tanish@gmail.com | i love football |

        And I click on submit button
        Then I verify validation message


        