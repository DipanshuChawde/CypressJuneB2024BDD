Feature: i want to test automatiopn practice login page

    Background: navigate to web page
        Given i navigate to login page

    # Scenario 1
    Scenario: verify login page for valid data
        # Given i navigate to login page
        When i enter login uid and pw
        And i clickon login button
        Then i verify login page

    # Scenario 2
    Scenario Outline: verify login page for multiple data
        # Given i navigate to login page
        When i enter login <useremail> and <pw>
        And i clickon login button
        Then i verify login page <useremail>

        Examples:
            | useremail              | pw           |
            | stageTesting@gmail.com | dipanshu@123 |
            | dipanshu33@gmail.com   | dipanshu@123 |

    # Scenario 3

    Scenario Outline: verify login page for multiple data
        # Given i navigate to login page
        When i enter login1 "<useremail>" and "<pw>"
        And i clickon login button
        Then i verify login page1 "<useremail>"

        Examples:
            | useremail              | pw           |
            | stageTesting@gmail.com | dipanshu@123 |
            | dipanshu33@gmail.com   | dipanshu@123 |