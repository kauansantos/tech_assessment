############################## TEST PLAN ##############################

-------------------------------------- INTRODUCTION --------------------------------------

In this approach, we will conduct a carbon emission calculation test using the EPA's Carbon Footprint Calculator.

====================================================================================================

------------------------------------------- SCOPE -------------------------------------------

User identification: 
- User who wants to calculate the carbon emission of their residence, transportation, and recyclable waste disposal

====================================================================================================

---------------------------------------- USER STORY ----------------------------------------

As a user of the carbon emission calculator,
I want to enter my personal data regarding Home Energy, Transportation, and Recyclable Waste,
So that I can obtain the result of my carbon emissions

------------------------------------ ACCEPTANCE CRITERIA ------------------------------------

HOME PAGE:

- A valid number of people in your home must be entered;
- Only integers must be entered in the number of people in your home section and must be between 1 and 50;
- If the number of people in your home is not filled in and the "Get Started" button is clicked, a red error message must appear;
- A valid number of zip code of your home with 5 digits must be entered;
- The exact number of characters in the zip code section must be 5 and only integers;
- If the number of characters in the zip code section is less than or greater than 5 and the "Get Started" button is clicked, a red error message must appear;
- If an invalid number of characters in the zip code section (e.g. "00000") is entered and the "Get Started" button is clicked, a red error message must appear;
- When the data of people in your home and zip code are correctly filled in and the "Get Started" button is clicked, the page must redirect to the initial data entry screen;
- The links in the "About" and "How To" sections must be enabled and clicking on them should direct to the addresses contained in the hyperlinks;
- The Excel Calculator Download button must be visible and functional and when clicked, the calculator must download to Excel and must be indicated in green.

Carbon Footprint Calculator:

- The page must contain the 3 sections (Home Energy, Transportation, and Waste) with illustrative images for each one and a progress bar below each section;
- As the sections and questions are filled out, the results must automatically update in a right-side panel, titled "Your Carbon Footprint."

HOME ENERGY:

- In the "Heating" section, the main source of heating for the house must be selected, containing 4 options in a combobox (Natural Gas, Electricity, Fuel Oil, and Propane) to proceed with the data entry, otherwise a red error message must appear and after the error is corrected, the message should no longer alert error;
- In the "Utility" section, there must be 4 boxes regarding carbon emission sources (Natural Gas, Electricity, Fuel Oil, and Propane);
- In each box, select the type of information being entered that will be: Dollars, Thousand Cubic Feet and Therms (Natural Gas), Dollars, kWh + % electricity that is Green (Electricity), Dollars and Gallons (Fuel Oil), Dollars and Gallons (Propane);
- When the above data is entered, automatically update the estimate in lbs below each box;
- In the Reduce Your Emissions box, enter the data in integers and select the combobox with the requested information;
- In the above box, the "Estimated Annual Savings" calculations must be automatically updated;
- When filling in the information throughout this section, the progress bar must follow the completion;
- At the bottom of the page, there must be a button to move to the Transportation page.

TRANSPORTATION:

- In the first box (Your Current Emissions from Transportation), there must be a vehicle section in which you must choose the number of vehicles through a combobox, from 1 to 5 vehicles;
- If 0 is chosen in the combobox regarding the number of cars, it is necessary to move forward, as there is no necessary information
- As the number of vehicles increases, sections must be created for the respective number of vehicles;
- You must choose one of the options if you do the current maintenance on your vehicle (Do not do, already done);
- You must fill in the average number of miles you drive and select the value per year or week;
- You must fill in the average consumption of miles per gallon;
- In these two fields, the field must have a tips section with a link to the average consumption calculation website;
- In the second box, the information is requested again, but for an expectation to reduce the expenses reported above;
- When filling in the information throughout this section, the progress bar must follow the completion;
- At the bottom of the page, there must be a button to return to the Home Energy page or to move to the Waste page.

WASTE:

- In the first frame, information is requested through checkboxes of which products are already recyclable in your home;
- It should contain 5 free choice checkboxes and there is no maximum or minimum number of choices;
- In the second frame, information is requested through checkboxes of which products will be recycled in your home;
- It should contain 5 free choice checkboxes and there is no maximum or minimum number of choices;
- As you fill in the information throughout this section, the progress bar should follow the completion;
- The bottom of the page should contain the button to go back to the Transportation page or to move on to the Report.

HOUSEHOLD CARBON FOOTPRINT REPORT:

- At the end of the report, there should be an option to select the information from the sections that will be displayed through checkboxes;
- In the first frame, there should be an available and functional icon to print/save the report in the first frame;
- In the second frame, there should be information about the actions that are being used and how much they are saving in each section;
- In the second frame, there should be a sharing button (Share It!) on social media and the button should be functional directing to Facebook or Twitter;
- When selecting the sharing button, a checkbox should be selected for the information you want to share, followed by a message;
- In the Third frame, it should contain the calculation information for the 5 years that will be avoided and the equivalent results in kilograms of emissions and the equivalent for gallons of gasoline;
- In the fourth frame, it should contain the information of dollars saved and the weight of CO2 reduction if new actions are taken;
- In the fifth frame, it should contain the information of dollars saved and the weight of CO2 reduction if new actions are already being taken.

====================================================================================================

--------------------------------------- TESTING STRATEGY ---------------------------------------

Types of Tests: 
- Functional Tests;

Testing Techniques: 
- Black-box testing (Automated); 
- Scenario testing (Automated); 
- Exploratory testing (Manual);

Responsible for activities: 
- Kauan Santos (QA).

====================================================================================================

----------------------------------------- RESOURCES ----------------------------------------

- For the execution of these tests, the programming language JavaScript with the Cypress 9.1.1 framework will be used;
- IDE used during test automation: Visual Studio Code (VSCode);
- All tests will be performed on the Google Chrome browser;
- Average time for project creation: 1 week.

====================================================================================================

------------------------------------------ SCHEDULE ------------------------------------------

Project start date: 
- 01/16/2023;

Project end date: 
- 01/24/2023.

====================================================================================================

---------------------------------------- TEST SCENARIOS ----------------------------------------

HOME PAGE:

Positive Tests:

- Test case for a house with 0 people in zip code 12345 and standard expenses according to US spending (?);
- Test case for a house with 1 person in zip code 12345 and standard expenses according to US spending (Automated);
- Test case for a house with 20 people in zip code 12345 and standard expenses according to US spending (Automated);
- Test case for a house with 50 people in zip code 12345 and standard expenses according to US spending (Automated);

- Test case for checking the link in the "About" section on the home page (Automated);
- Test case for checking the link in the "How To" section on the home page (Automated);
- Test case for checking the download button for the offline calculator in the "Download" section on the home page (Automated);

Negative Tests:

- Test case for a house with 1 person in zip code 00000 (Fails with indication of default zip code); (Automated)
- Test case for a house with 1 person and no zip code entered (Fails with indication to enter a 5-digit zip code) (Automated);
- Test case for a house with 1 person and zip code 123 (Fails with indication to enter a 5-digit zip code) (Automated);

- Test case where the number of people and zip code are not entered (Fails with indication to enter number of people and zip code) (Automated);
- Test case where the number of people and zip code are incorrect (Fails with indication to enter a valid number of people)(Automated);
- Test case where the number of people and valid zip code are not entered (Fails with indication to enter a valid number of people) (Automated);
- Test case where the number of people and zip code has less than 5 numbers (Fails with indication to enter a valid number of people and a zip code with 5 numbers) (Automated);
 
- Test case where only letters are entered for number of people and zip code (example letter "e")(Fails with indication to enter a valid zip code) (Automated);
- Test case where only special characters are entered for number of people and zip code (example character "," (comma))(Fails with indication to enter a valid zip code) (Automated);

HOME ENERGY:

Positive test:

- Test case of a house with 1 person in zip code 12345 with main heating source "Natural Gas" using standard expenses according to United States expenses, without cars and without disposal (Automated);
- Test case of a house with 1 person in zip code 12345 with main heating source "Electricity" using standard expenses according to United States expenses, without cars and without disposal (Automated);
- Test case of a house with 1 person in zip code 12345 with main heating source "Fuel Oil" using standard expenses according to United States expenses, without cars and without disposal (Automated);
- Test case of a house with 1 person in zip code 12345 with main heating source "Propane" using standard expenses according to United States expenses, without cars and without disposal (Automated);

- Test case of a house with 1 person in zip code 12345 with main heating source "Natural Gas" with all expense values set to 0 in dollars, without cars and without disposal (Automated);
- Test case of a house with 1 person in zip code 12345 with main heating source "Natural Gas" with all expense values set to 1000 dollars, without cars and without disposal (Automated);

- Test case of a house with 1 person in zip code 12345 with main heating source "Natural Gas" using standard expenses according to United States expenses and filling all emission reduction fields with value 0 and combobox with option "Will Do" (Automated);
- Test case of a house with 1 person in zip code 12345 with main heating source "Natural Gas" using standard expenses according to United States expenses and filling all emission reduction fields with value 0 and combobox with option "Will Not Do" (Automated);
- Test case of a house with 1 person in zip code 12345 with main heating source "Natural Gas" using standard expenses according to United States expenses and filling all emission reduction fields with value 0 and combobox with option "Already Done" (Automated);

- Test case of a house with 1 person in zip code 12345 with main heating source "Natural Gas" using standard expenses according to United States expenses and filling all emission reduction fields with default value and combobox with option "Will Do" (Automated);

Negative test:

- Test case of a house with 1 person in CEP 12345 that does not select the main heating source and follows the completion of random fields (Automated);

- Test case of a house with 1 person in CEP 12345 with the main heating source “Natural Gas” and that continues to fill in other fields and does not fill in the value of the selected heating source (Automated);
- Test case of a house with 1 person in CEP 12345 with main heating source “Electricity” and that continues to fill in other fields and does not fill in the value of the selected heating source (Automated);
- Test case of a house with 1 person in CEP 12345 with the main heating source “Fuel Oil” and that continues to fill in other fields and does not fill in the value of the selected heating source (Automated);
- Test case of a house with 1 person in CEP 12345 with the main heating source “Propane” and that continues to fill in other fields and does not fill in the value of the selected heating source (Automated);

TRANSPORT:

Positive Tests:

- Test case of a 1 person house in zip code 12345 with main source of heating “Natural Gas” using standards according to US spending and no car and no recyclable disposal (Automated);
- Test case of a house with 1 person in CEP 12345 with main source of heating “Natural Gas” using the standards according to the expenses of the United States and with 1 car and without recyclable disposal (Automated);
- Test case of a house with 1 person in CEP 12345 with main source of heating “Natural Gas” using the standards according to the expenses of the United States and with 5 cars and without recyclable disposal (Automated);
- Test case of a house with 1 person in CEP 12345 with main source of heating “Natural Gas” using spending patterns according to US spending, with 1 car, with “Already Done” maintenance, with patterns of vehicle expenses and no recyclable disposal;

- Test case of a house with 1 person in zip code 12345 with main source of heating “Natural Gas” using the standards according to the expenses of the United States and with 1 car, using the emission reductions and without recyclable disposal;

WASTE:

Positive Tests:

- Test case of a house with 1 person in zipcode 12345 with main source of heating the “Natural Gas” using standard expenses according to the expenses of the United States, without car and without disposal (Automated);
- Test case of a house with 1 person in zipcode 12345 with main source of heating the “Natural Gas” using standard expenses according to the expenses of the United States, without car and recycling only plastic (Automated);
- Test case of a house with 1 person in zipcode 12345 with main source of heating the “Natural Gas” using standard expenses according to the expenses of the United States, without car and recycling all options (Automated);
- Test case of a house with 1 person in zipcode 12345 with main source of heating the “Natural Gas” using standard expenses according to the expenses of the United States, without car, without disposal and starting the recycling of glass only (Automated);
- Test case of a house with 1 person in zipcode 12345 with main source of heating the “Natural Gas” using standard expenses according to the expenses of the United States, without car, without disposal and starting the recycling of all options (Automated);

REPORT PAGE:

Positive Tests:

- Test case of a house with 1 person in zipcode 12345 with standard expenses that the result of the sum of expenses is less than the average of the United States (Automated);
- Test case of a house with 1 person in zipcode 12345 with standard expenses that the result of the sum of expenses is greater than the average of the United States (Automated);

- Test case of a house with 1 person in zipcode 12345 with standard expenses that the result of the sum of expenses is displayed only "Home Energy" (Automated);
- Test case of a house with 1 person in zipcode 12345 with standard expenses that the result of the sum of expenses is displayed only “Transportation” (Automated);
- Test case of a house with 1 person in zipcode 12345 with standard expenses that the result of the sum of expenses is displayed only “Waste” (Automated);

- Test case of a house with 1 person in zipcode 12345 with standard expenses and print/save button is displayed (Automated);
- Test case of a house with 1 person in zipcode 12345 with standard expenses and when the final report is displayed the info sharing button is displayed (Automated);
- Test case of a house with 1 person in zipcode 12345 with standard expenses and when the final report is displayed, a report of small actions is displayed (Automated)

------------------------------------------------- BUGS -------------------------------------------------

- 1) Bug in the selection of vehicles in the transportations section

When selecting more than one vehicle in the selectbox and right after returning to the initial number (1), in the final report the number of vehicles that was selected is displayed and even after returning to the initial value (1) in the final report it is displayed with null value. Null value is also displayed if you select the quantity 0 of cars;

- 2) Section completion progress bar error

When you select one of the options in the "Waste" section and select it again, thus unchecking that option, the filling progress bar just below the session indication remains filled, giving the impression that the data has been filled;

- 3) Primary heat selectbox alert error

After selecting the first combobox on the primary heat source in your residence, and following the filling but not filling in the monthly values of the chosen source, an error is displayed with an alert. When returning and filling in, the system is still alerting the error that has already been corrected, with each character that is inserted in any session or action within the site;

- 4) Error in number of primary heat source options

In the first session of Home Energy, when the primary source of heating for the house is asked, only 4 options are listed, where in total there are 6 options missing the options (wood and if you do not heat your house), indicated in the offline calculator.

* All bugs mentioned above have been identified with Exploratory Testing (Manually) 

----------------------------------------------- QUESTIONS -----------------------------------------------

- 1) When the number 0 is inserted in the total number of people in the house, the system runs the entire calculation process normally, is this a bug or does it need an improvement in this process?

- 2) An improvement that can be implemented is to create a tab to access the report section, as there are 3 other tabs (home energy, transportation, waste)

############################## CYPRESS USAGE GUIDE ##############################

This project uses Cypress as an automated testing tool. Cypress is a powerful tool that allows for quick and easy testing of web applications.

====================================================================================================

--------------------------------------------- INSTALLATION ---------------------------------------------

1) First, make sure you have Node.js installed on your machine. You can download it from the official Node.js website (https://nodejs.org/en/).

2) Next, install Cypress via npm by typing the following command in the terminal:

npm install cypress

3) After installation, you can open Cypress by typing the following command:

./node_modules/.bin/cypress open

====================================================================================================

--------------------------------------------- CONFIGURATION ---------------------------------------------

1) Before running tests, you will need to configure Cypress. This includes specifying the base address of the application you wish to test and setting up any necessary environment variables.

2) To specify the base address of the application, open the "cypress.json" file and add the following line:

{
    "baseUrl": "http://yourwebsite.com"
}

3) To set up environment variables, open the "cypress.env.json" file and add the variables as key-value, for example:

{
    "username": "your_username",
    "password": "your_password"
}

====================================================================================================

 --------------------------------------------- RUNNING TESTS ---------------------------------------------

1) To run all tests, open the terminal and type the following command:

./node_modules/.bin/cypress run

2) To run specific tests, you can specify the path of the test file, for example:

./node_modules/.bin/cypress run --spec cypress/integration/my_tests.spec.js

3) To run tests interactively, you can use the command:

./node_modules/.bin/cypress open

This will open the Cypress Test Runner and allow you to run tests manually.

====================================================================================================

------------------------------------------- ADDITIONAL RESOURCES -------------------------------------------

For more information on using Cypress, refer to the official documentation at https://docs.cypress.io/. If you have any questions or encounter any issues, do not hesitate to contact me.
