Feature: Login flow


Scenario: Successful login
Given user visits the login page
When the user enters valid username "standard_user"
And the user enters valid password "secret_sauce"
And clicks the login button
Then the user should be redirected to the dashboard
And a welcome message should be displayed
