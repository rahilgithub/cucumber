/**
 * 
 */
package com.training.steps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;		
import cucumber.api.java.en.Then;		
import cucumber.api.java.en.When;		

public class RegistrationSteps {				

    WebDriver driver;			
    		
    @Given("^Launch the Firefox and open the Upskill application$")					
    public void open_the_Firefox_and_launch_the_application() throws Throwable							
    {		
       System.setProperty("webdriver.gecko.driver", "C:\\Users\\RahilAkram\\Documents\\eclipse-workspace\\cucumber-works\\geckodriver.exe");					
       driver= new FirefoxDriver();					
       driver.manage().window().maximize();			
       driver.get("http://elearningm1.upskills.in/");	
      
    }		

   @When("^click on Sing Up Button and Enter Mandatory Fields$")
    public void enter_Mandatory_fields() throws Throwable 							
    {		
    	driver.findElement(By.xpath("//a[@href='http://elearningm1.upskills.in/main/auth/inscription.php']")).click();
       //driver.findElement(By.name(" Sign up!")).click();
       driver.findElement(By.id("registration_firstname")).sendKeys("Rahil");
       driver.findElement(By.id("registration_lastname")).sendKeys("Akram");
       driver.findElement(By.id("registration_lastname")).sendKeys("Akram");
       driver.findElement(By.id("registration_email")).sendKeys("rahakram@in.ibm.com");
       driver.findElement(By.id("username")).sendKeys("rahil123");
       driver.findElement(By.id("pass1")).sendKeys("upskill123");
       driver.findElement(By.id("pass2")).sendKeys("upskill123"); // confirm password
       
    }		

    @Then("^click on Register button$")					
    public void Clcik_Register_Button() throws Throwable 							
    {		
       driver.findElement(By.id("registration_submit")).click(); // Register button		
       driver.close();
    }		
    
    
    @When("^Enter Login credentails and click Login$") 
    public void I_enter_Username_as_and_Password ()  {
        driver.findElement(By.id("login")).sendKeys("rahil123");
        driver.findElement(By.id("password")).sendKeys("upskill123");
        driver.findElement(By.id("form-login_submitAuth")).click();
    
    }

    @Then("^click on inbox button$")
    public void click_on_inbox_button() throws Throwable {
    	
    	driver.findElement(By.xpath("//a[@href='http://elearningm1.upskills.in/main/messages/new_message.php']")).click();
        
    }

    @When("^compose email$")
    public void compose_email() throws Throwable {
        
         driver.navigate().refresh();
         
         WebElement sendTo = driver.findElement(By.className("select2-search__field"));
         sendTo.sendKeys("nav");
         
      //Actions action= new Actions(driver);
         
         WebDriverWait wait = new WebDriverWait(driver, 10);
         wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("li.select2-results__option:nth-child(3)"))).click();
      
      driver.findElement(By.id("compose_message_title")).sendKeys("sending email with cucumber assignment");
      driver.findElement(By.xpath("/html")).sendKeys("Hi");
      driver.findElement(By.id("file-descrtiption")).sendKeys("Cucumber case study");
          }
    
    @Then("^click send message button$")
    public void click_send_message_button() throws Throwable {
    	
    	
    	driver.findElement(By.id("compose_message_compose")).click();
    	
    	driver.close();
        
    }

    
    
}	