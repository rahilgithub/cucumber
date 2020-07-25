/**
 * 
 */
package com.training.testrunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions; 
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

/**
 * @author RahilAkram
 *
 */
@RunWith(Cucumber.class)
@CucumberOptions(features = {"C:\\Users\\RahilAkram\\Documents\\eclipse-workspace\\cucumber-works\\src\\main\\resources\\com\\training\\features\\telecom.feature"},
		glue = {"com.training.steps"},
		plugin = {"pretty", "html:target/cucumber-html-report",
				            "json:target/cucumber-json-report"
				
                     },
		
		monochrome = true )

public class TestRunnerTestNg extends AbstractTestNGCucumberTests {
	
	

}
