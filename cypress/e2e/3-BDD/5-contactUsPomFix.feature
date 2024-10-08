Feature: verify contact us page using pom and fixture

    Scenario Outline: contact us page with pom
        Given I navigate to contact us page
        When I enter data from datatable <fn> , <ln>, <em>, <msg>
        Then I validate contact us page

        Examples:
            | fn       | ln       | em                 | msg        |
            | dipanshu | chawde   | dipanshu@gmail.com | cypress    |
            | rucha    | gaware   | rucha@gmail.com    | playwright |
            | Aditya   | masalkar | adity@gmail.com    | sql        |

    Scenario Outline: contact us page with pom and fixture
        Given I navigate to contact us page using fixture <index>
        When I enter data from fixture
        Then I validate contact us page

        Examples:
            | index |
            | 0     |
            | 1     |
            | 2     |