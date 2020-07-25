package com.training.steps;
 
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When; 

public class cucumberTag { 
   WebDriver driver; 
	
@Given("^user navigates to gurusite$")
   public void user_navigates_to_gurusite() throws Throwable {
      driver = new FirefoxDriver(); 
      driver.navigate().to("http://demo.guru99.com/v4"); 
   } 
	
@When("^I enter Username as \"([^\"]*)\" and Password as \"([^\"]*)\"$") 
   public void I_enter_Username_as_and_Password_as(String arg1, String arg2) throws Throwable {
      driver.findElement(By.name("uid")).sendKeys(arg1);
      driver.findElement(By.name("password")).sendKeys(arg2);
      driver.findElement(By.name("btnLogin")).click(); 
      driver.switchTo().alert().accept();
   } 
	
@Then("^login should be unsuccessful$")
public void login_should_be_unsuccessful() throws Throwable {
      if(driver.getCurrentUrl().equalsIgnoreCase(
         "http://demo.guru99.com/v4/index.php")){ 
            System.out.println("Test Pass"); 
      } else { 
         System.out.println("Test Failed"); 
      }
      driver.close(); 
   } 
	
@Then("^the user should be redirected to login retry$")
public void the_user_should_be_redirected_to_login_retry() throws Throwable {
      if(driver.getCurrentUrl().equalsIgnoreCase(
         "http://demo.guru99.com/v4/index.php")){ 
            System.out.println("Test Pass"); 
      } else { 
         System.out.println("Test Failed"); 
      } 
      driver.close(); 
   } 
}