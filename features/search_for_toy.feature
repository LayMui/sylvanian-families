Feature: Search for Toy
In order to buy good toys for my nieces to play
As a shopper Mary
Mary wants to search for her niece favourite toy
  Scenario Outline: Able to search for toy 
  
    Given Mary is at the home page
    When she searches for the toy <toy>
    Then she should see search result for the toy <toy>

    Examples:
      | toy | 
      | Sylvanian |