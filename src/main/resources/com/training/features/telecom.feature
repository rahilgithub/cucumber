Feature: Reset functionality on login page of Application 

Scenario Outline: Login functionality for a social networking site. 

	Given user navigates to gurusite 
	
	When I enter Username as "<username>" and Password as "<password>" 
	
	Then login should be unsuccessful 
	
	Examples: 
		|username  |password         |		
		|User1     |password1        |		
		|User2     |password2        |		
		|User3     |password3        |
		
		
@SmokeTest 
Scenario: 

	Given user navigates to gurusite 
	
	When I enter Username as "<>" and Password as "<>" 
	
	Then the user should be redirected to login retry 
