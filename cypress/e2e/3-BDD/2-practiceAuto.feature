Feature: i want to test automatiopn practice login page

    Scenario: verify login page for valid data
        Given i navigate to login page
        When i enter login uid and pw
        And i clickon login button
        Then i verify login page