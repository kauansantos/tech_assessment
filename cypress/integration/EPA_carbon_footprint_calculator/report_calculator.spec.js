describe('EPAs Carbon Footprint Calculator Report', () => {

    beforeEach(() =>{
        cy.visit('https://www3.epa.gov/carbon-footprint-calculator/')
    })

    it('Test 1 person in zipcode 12345 with standard expenses that the result of the sum of expenses is less than the average of the United States', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.primary_heating_average_values('Natural Gas')
        cy.default_flow_without_car_and_waste()
        cy.good_work_message()
    })

    it('Test 1 person in the zipcode 12345 with standard expenses that the result of the sum of the expenses is greater than the average of the United States', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.primary_heating_expensive_values('Natural Gas')
        cy.default_flow_without_car_and_waste()
        cy.no_good_work_message()
    })

    it('Test 1 person home in zipcode 12345 with standard expenditures that only shows “Home Energy” in the final report', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.primary_heating_average_values('Natural Gas')
        cy.default_flow_without_car_and_waste()
        cy.energy_show_chart()
    })

    it('Test 1 person home in zipcode 12345 with standard expenditures that only shows “Transportation” in the final report', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.primary_heating_average_values('Natural Gas')
        cy.default_flow_without_car_and_waste()
        cy.transport_show_chart()
    })

    it('Test 1 person home in zipcode 12345 with standard expenditures that only shows "Waste" in the final report', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.primary_heating_average_values('Natural Gas')
        cy.default_flow_without_car_and_waste()
        cy.waste_show_chart()
    })

    it('Test 1 person in zipcode 12345 with standard expenses print/save button is displayed', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.primary_heating_average_values('Natural Gas')
        cy.default_flow_without_car_and_waste()
        cy.print_icon_button()
    })

    it('Test 1 person in zipcode 12345 with standard expenses and in the final report the info sharing button is displayed', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.primary_heating_average_values('Natural Gas')
        cy.default_flow_without_car_and_waste()
        cy.share_button()
    })

    it('Test 1 person in zipcode 12345 with standard expenses and when the final report is displayed, the report of small actions is displayed', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.primary_heating_average_values('Natural Gas')
        cy.default_flow_without_car_and_waste()
        cy.small_actions_session()
    })

})