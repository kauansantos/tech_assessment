describe('EPAs Carbon Footprint Calculator Home Page', () => {

    beforeEach(() =>{
        cy.visit('https://www3.epa.gov/carbon-footprint-calculator/')
    })

    // POSITIVE TESTS

    it('Accessing Calculator', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
    })

    it('1 person test with standard expenses, no car and no waste', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
         
 
 
 cy.primary_heating_average_values('Natural Gas')
        cy.default_flow_without_car_and_waste()
    })

    it('20 person test with standard expenses, no car and no wast', () => {
        cy.tewnty_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
         
 
 
 cy.primary_heating_average_values('Natural Gas')
        cy.default_flow_without_car_and_waste()
    })

    it('50 person test with standard expenses, no car and no wast', () => {
        cy.fifty_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
         
 
 
 cy.primary_heating_average_values('Natural Gas')
        cy.default_flow_without_car_and_waste()
    })

    it('Test case analyzing link from "About" section', () => {
        cy.scrollTo(0, 500)
        cy.about_assert()
    })

    it('Test case analyzing link from "How To" section', () => {
        cy.scrollTo(0, 500)
        cy.how_to_assert()
    })

    it('Test case analyzing offline calculator download', () => {
        cy.scrollTo(0, 500)
        cy.offline_calculator_assert()
    })

    // NEGATIVE TESTS

    it('Test case invalid zipcode number', () => {
        cy.invalid_zipcode_zero()
        cy.wait(2000)
        cy.invalid_zipcode_message()
    })

    it('Test case 3 digit zipcode number', () => {
        cy.three_digits_zipcode()
        cy.wait(2000)
        cy.invalid_num_zipcode_message()
    })

    it('Test case zipcode number with 0 digits', () => {
        cy.zero_digits_zipcode()
        cy.invalid_num_zipcode_message()
    })

    it('Test case where no number of people and zipcode is entered', () => {
        cy.zero_digits_zipcode_and_people()
        cy.invalid_num_people_message()
        cy.invalid_num_zipcode_message()
    })

    it('Test case where the number of people is not entered and the zipcode is incorrect', () => {
        cy.without_people_zero_digits_zipcode()
        cy.invalid_num_people_message()
    })

    it('Test case where the number of people is not entered and the zipcode is correct', () => {
        cy.without_people_valid_zipcode()
        cy.invalid_num_people_message()
    })

    it('Test case where no number of people is entered and zipcode has less than 5 numbers', () => {
        cy.without_people_three_digits_zipcode()
        cy.invalid_num_people_message()
        cy.invalid_num_zipcode_message()
    })

    it('Test case where zipcode and number of people filled with letters', () => {
        cy.people_zipcode_letter()
        cy.invalid_num_people_message()
        cy.invalid_num_zipcode_message()
    })

    it('Test case where zipcode and number of people filled with special character', () => {
        cy.people_zipcode_special_digits()
        cy.invalid_num_people_message()
        cy.invalid_num_zipcode_message()
    })
    
})