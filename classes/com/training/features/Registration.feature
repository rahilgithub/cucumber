Feature: Registration functionality on welcome page of Application 

Scenario: Verification of Sign Up button 

	Given Launch the Firefox and open the Upskill application 
	
	When click on Sing Up Button and Enter Mandatory Fields 
	
	Then click on Register button 
	
	
Scenario: Verification of inbox option 

	Given Launch the Firefox and open the Upskill application 
	
	When Enter Login credentails and click Login 
	
	Then click on inbox button 
	
	When compose email 
	
	Then click send message button 
	
	
	
		