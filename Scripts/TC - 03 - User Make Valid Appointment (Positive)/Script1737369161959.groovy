import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys
import java.time.LocalDate
import java.time.format.DateTimeFormatter

WebUI.callTestCase(findTestCase('TC - 01 - User Login With Valid Data (Positive)'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.selectOptionByValue(findTestObject('Object Repository/Appointment Page/select_facility'), "Seoul CURA Healthcare Center", false)

WebUI.click(findTestObject('Object Repository/Appointment Page/input_apply_readmission'))

WebUI.click(findTestObject('Object Repository/Appointment Page/input_healthcare_program',[('input_program') : GlobalVariable.HEALTHCARE_PROGRAM]))

WebUI.setText(findTestObject('Object Repository/Appointment Page/input_visit_date'), "20/01/2025")

WebUI.setText(findTestObject('Object Repository/Appointment Page/text_area_comment'), "This is comment testing")

WebUI.click(findTestObject('Object Repository/Appointment Page/button_book_appointment'))

WebUI.verifyMatch(WebUI.getText(findTestObject('Object Repository/Appointment Confirmation Page/label_facility')), "Seoul CURA Healthcare Center", false)

WebUI.verifyMatch(WebUI.getText(findTestObject('Object Repository/Appointment Confirmation Page/label_apply_for_hospital')),"Yes", false)

WebUI.verifyMatch(WebUI.getText(findTestObject('Object Repository/Appointment Confirmation Page/label_healthcare_program')), "Medicaid", false)

WebUI.verifyMatch(WebUI.getText(findTestObject('Object Repository/Appointment Confirmation Page/label_visit_date')),"20/01/2025", false)

WebUI.verifyMatch(WebUI.getText(findTestObject('Object Repository/Appointment Confirmation Page/label_comment')), "This is comment testing", false)

WebUI.click(findTestObject('Object Repository/Appointment Confirmation Page/button_homepage'))

WebUI.closeBrowser()
	
