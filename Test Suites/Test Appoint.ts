<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Test Appoint</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>3</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>a35410e2-5b01-418e-a8ba-f2d977eaacb3</testSuiteGuid>
   <testCaseLink>
      <guid>f80f8dca-a3d7-4184-9faf-f9d0907148bc</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/TC - 01 - User Login With Valid Data (Positive)</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>117dca6f-1896-4367-b331-ccaef2c884aa</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/TC - 02 - User Login With Invalid Data (Negative)</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>c8db759c-9953-40ff-b649-41a77d9ef416</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <iterationNameVariable>
         <defaultValue>'Seoul CURA Healthcare Center'</defaultValue>
         <description></description>
         <id>dd2cf6f6-dd63-474f-a129-89bfe7bd7287</id>
         <masked>false</masked>
         <name>facility</name>
      </iterationNameVariable>
      <testCaseId>Test Cases/TC - 03 - User Make Valid Appointment (Positive)</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>e1528dbb-ae7f-4cc3-8efb-aae585dd1922</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Test Data Appointment</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>e1528dbb-ae7f-4cc3-8efb-aae585dd1922</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>facility</value>
         <variableId>dd2cf6f6-dd63-474f-a129-89bfe7bd7287</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>e1528dbb-ae7f-4cc3-8efb-aae585dd1922</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>input_program</value>
         <variableId>d6cf2465-83ce-480e-aabc-351c2371c018</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>e1528dbb-ae7f-4cc3-8efb-aae585dd1922</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>visit_date</value>
         <variableId>0dbf1679-87c2-448f-8245-a40a8042f943</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>e1528dbb-ae7f-4cc3-8efb-aae585dd1922</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>comment</value>
         <variableId>0e6386dd-55c7-4305-9e2f-20eeae2b8318</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
