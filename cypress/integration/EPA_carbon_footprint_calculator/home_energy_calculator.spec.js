describe('EPAs Carbon Footprint Calculator Home Energy Page', () => {

    beforeEach(() =>{
        cy.visit('https://www3.epa.gov/carbon-footprint-calculator/') 
    })

    // TESTS WITH VARIATION OF HEATING SOURCE, WITHOUT CAR AND WASTER

    it.only('Test 1 person in zipcode 12345 with "Natural Gas" main heating source using standard expenses, without car and waste', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
         
 
 
 cy.primary_heating_average_values('Natural Gas')
        cy.default_flow_without_car_and_waste()
    })

    it('Test 1 person in zipcode 12345 with "Electricity" main heating source using standard expenses, without car and waste', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.primary_heating_average_values('Electricity')
        cy.default_flow_without_car_and_waste()
    })

    it('Test 1 person in zipcode 12345 with "Fuel Oil" main heating source using standard expenses, without car and waste', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.primary_heating_average_values('Fuel Oil')
        cy.default_flow_without_car_and_waste()
    })

    it('Test 1 person in zipcode 12345 with "Propane" main heating source using standard expenses, without car and waste', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.primary_heating_average_values('Propane')
        cy.default_flow_without_car_and_waste()
    })

    // TESTS WITH VARIATION IN EXPENSES, WITHOUT CAR AND DISPOSAL

    it('Test 1 person in zipcode 12345 with main heating source "Natural Gas" with expenditure values ​​in 0 dollar, without car and waste', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.primary_heating_zero_values('Natural Gas')
        cy.default_flow_without_car_and_waste()
    })

    it('Test 1 person in zipcode 12345 with main heating source "Natural Gas" with expenditure values ​​in 1000 dollar, without car and waste', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.primary_heating_expensive_values('Natural Gas')
        cy.default_flow_without_car_and_waste()
    })

    // TESTS WITH VARIATION OF EMISSION REDUCTION, WITHOUT CAR AND WASTE

    it('Test 1 person in zipcode 12345 with main heating source "Natural Gas" using standard expenses, filling all reduction fields and with value 0 with option "Will Do", without car and waste', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
         
 
 
 cy.primary_heating_average_values('Natural Gas')
        cy.primary_heating_reduce_zero_will_do()
        cy.default_flow_without_car_and_waste()
    })

    it('Test 1 person in zipcode 12345 with main heating source "Natural Gas" using standard expenses, filling all reduction fields and with value 0 with option "Will Not Do", without car and waste', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
         
 
 
 cy.primary_heating_average_values('Natural Gas')
        cy.primary_heating_reduce_zero_will_not_do()
        cy.default_flow_without_car_and_waste()
    })

    it('Test 1 person in zipcode 12345 with main heating source "Natural Gas" using standard expenses, filling all reduction fields and with value 0 with option "Already Done", without car and waste', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
         
 
 
 cy.primary_heating_average_values('Natural Gas')
        cy.primary_heating_reduce_zero_already_done()
        cy.default_flow_without_car_and_waste()
    })

    it('Test 1 person in zipcode 12345 with main heating source "Natural Gas" using standard expenses, filling all reduction fields and with default value with option "Will Do", without car and waste', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
         
 
 
 cy.primary_heating_average_values('Natural Gas')
        cy.primary_heating_reduce_default_values_will_do()
        cy.default_flow_without_car_and_waste()
    })

    // NEGATIVE TESTS

    it('Test 1 person in zipcode 12345 that does not select the main heating source “Natural Gas” and going filling in random fields and generates an error', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.message_error_without_primary_heating()
    })

    it('Test 1 person in zipcode 12345 with the main heating source “Natural Gas” and that going filling other fields and does not fill in the value of the selected heating source', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.message_error_without_natural_gas_primary_heating_values()
    })

    it('Test 1 person in zipcode 12345 with the main heating source “Electricity” and that going filling other fields and does not fill in the value of the selected heating source', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.message_error_without_electricity_primary_heating_values()
    })

    it('Test 1 person in zipcode 12345 with the main heating source “Fuel Oil” and that going filling other fields and does not fill in the value of the selected heating source', () => {   
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.message_error_without_fuel_oil_primary_heating_values()
    })

    it('Test 1 person in zipcode 12345 with the main heating source “Propane” and that going filling other fields and does not fill in the value of the selected heating source', () => {   
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.message_error_without_propane_primary_heating_values()
    })
})