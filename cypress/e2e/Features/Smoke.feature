Feature: Validate end to end product checkout flow

Scenario: checkout products
Given user login to the application
Then the user should be redirected to the dashboard
When user adds products to the cart
And user validates the shopping cart counter
And user clicks on the shopping cart link
And user proceeds to checkout
And user enters shipping information
Then user validate the cart total price
And user finishes the checkout process
