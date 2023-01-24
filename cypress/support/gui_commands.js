
// HOME PAGE COMMANDS

Cypress.Commands.add('default_residents_zipcode', () => {

    cy.get('#ppl-in-household-input').type('1')
    cy.get('#zip-code-input').type('12345') 
    cy.get('#get-started').click()

})

Cypress.Commands.add('tewnty_residents_zipcode', () => {

    cy.get('#ppl-in-household-input').type('20')
    cy.get('#zip-code-input').type('12345') 
    cy.get('#get-started').click()

})

Cypress.Commands.add('fifty_residents_zipcode', () => {

    cy.get('#ppl-in-household-input').type('50')
    cy.get('#zip-code-input').type('12345') 
    cy.get('#get-started').click()

})

Cypress.Commands.add('invalid_zipcode_zero', () => {

    cy.get('#ppl-in-household-input').type('1')
    cy.get('#zip-code-input').type('00000') 
    cy.get('#get-started').click()

})

Cypress.Commands.add('invalid_zipcode_message', () => {

    cy.get('#invalidZip').should('be.visible')
    cy.scrollTo(500, 0)

})

Cypress.Commands.add('three_digits_zipcode', () => {

    cy.get('#ppl-in-household-input').type('1')
    cy.get('#zip-code-input').type('123') 
    cy.get('#get-started').click()

})

Cypress.Commands.add('invalid_num_zipcode_message', () => {

    cy.get('#invalidZipNum').should('be.visible')
    cy.scrollTo(500, 0)

})

Cypress.Commands.add('zero_digits_zipcode', () => {

    cy.get('#ppl-in-household-input').type('1')
    cy.get('#zip-code-input').type(' ') 
    cy.get('#get-started').click()

})

Cypress.Commands.add('without_people_zero_digits_zipcode', () => {

    cy.get('#ppl-in-household-input').type(' ')
    cy.get('#zip-code-input').type('00000')
    cy.get('#get-started').click()

})

Cypress.Commands.add('without_people_valid_zipcode', () => {

    cy.get('#ppl-in-household-input').type(' ')
    cy.get('#zip-code-input').type('12345')
    cy.get('#get-started').click()

})

Cypress.Commands.add('without_people_three_digits_zipcode', () => {

    cy.get('#ppl-in-household-input').type(' ')
    cy.get('#zip-code-input').type('123')
    cy.get('#get-started').click()

})

Cypress.Commands.add('people_zipcode_special_digits', () => {

    cy.get('#ppl-in-household-input').type(',')
    cy.get('#zip-code-input').type(',')
    cy.get('#get-started').click()

})

Cypress.Commands.add('people_zipcode_letter', () => {

    cy.get('#ppl-in-household-input').type('e')
    cy.get('#zip-code-input').type('e')
    cy.get('#get-started').click()

})

Cypress.Commands.add('without_people_three_digits_zipcode', () => {

    cy.get('#ppl-in-household-input').type(' ')
    cy.get('#zip-code-input').type('123')
    cy.get('#get-started').click()

})

Cypress.Commands.add('invalid_num_people_message', () => {

    cy.get('#invalidNum').should('be.visible')
    cy.scrollTo(500, 0)

})

Cypress.Commands.add('zero_digits_zipcode_and_people', () => {

    cy.get('#ppl-in-household-input').type(' ')
    cy.get('#zip-code-input').type(' ') 
    cy.get('#get-started').click()

})


Cypress.Commands.add('about_assert', () => {

    cy.get('#copy-driven-content > :nth-child(1) > h3').contains('About')
    cy.get('span > .bold-n-blue').should('be.visible')

})

Cypress.Commands.add('how_to_assert', () => {

    cy.get('#copy-driven-content > :nth-child(2) > h3').contains('How To')
    cy.get('[href="https://fueleconomy.gov"]').should('be.visible')
    cy.get('[href="https://www.fueleconomy.gov/mpg/MPG.do?action=calcMPG"]').should('be.visible')

})

Cypress.Commands.add('offline_calculator_assert', () => {

    cy.get('#copy-driven-content > :nth-child(3) > h3').contains('Download')
    cy.get('li > button').should('be.visible')

})

// HOME ENERGY COMMANDS

Cypress.Commands.add('asserting_page_home_energy', () => {

    cy.get('.sectionName').contains('Home Energy').should('be.visible')
    cy.scrollTo(500, 0)

})

Cypress.Commands.add('primary_heating_average_values', (primary_heating) => {

    cy.get('#primaryHeatingSource').select(primary_heating)
    cy.get('#naturalGasTextInput').type('23')
    cy.get('#electricityTextInput').type('44')
    cy.get('#electricityGreenTextInput').type('80')
    cy.get('#fuelTextInput').type('72')
    cy.get('#propaneTextInput').type('37')

})

Cypress.Commands.add('primary_heating_zero_values', (primary_heating) => {

    cy.get('#primaryHeatingSource').select(primary_heating)
    cy.get('#naturalGasTextInput').type('0')
    cy.get('#electricityTextInput').type('0')
    cy.get('#electricityGreenTextInput').type('0')
    cy.get('#fuelTextInput').type('0')
    cy.get('#propaneTextInput').type('0')

})

Cypress.Commands.add('primary_heating_expensive_values', (primary_heating) => {

    cy.get('#primaryHeatingSource').select(primary_heating)
    cy.get('#naturalGasTextInput').type('1000')
    cy.get('#electricityTextInput').type('1000')
    cy.get('#electricityGreenTextInput').type('80')
    cy.get('#fuelTextInput').type('1000')
    cy.get('#propaneTextInput').type('1000')

})

Cypress.Commands.add('primary_heating_reduce_zero_will_do', () => {

    cy.get('#energyAC').type('0')
    cy.get('#energyHeat').type('0')
    cy.get('#lightsToReplace').type('0')
    cy.get('#pwrMgmtSelect').select('Will Do')
    cy.get('#increaseGreenInput').type('0')
    cy.get('#coldWaterSelect').select('Will Do')
    cy.get('#loadsPerWeek').type('2')
    cy.get('#AirDrySelect').select('Will Do')
    cy.get('#percentageAirDrySelect').select('10% of my Laundry')
    cy.get('#fridgeSelect').select('Will Do')
    cy.get('#furnaceSelect').select('Will Do')
    cy.get('#windowSelect').select('Will Do')

})

Cypress.Commands.add('primary_heating_reduce_zero_will_not_do', () => {

    cy.get('#energyAC').type('0')
    cy.get('#energyHeat').type('0')
    cy.get('#lightsToReplace').type('0')
    cy.get('#pwrMgmtSelect').select('Will Not Do')
    cy.get('#increaseGreenInput').type('0')
    cy.get('#coldWaterSelect').select('Will Not Do')
    cy.get('#loadsPerWeek').type('2')
    cy.get('#AirDrySelect').select('Will Not Do')
    cy.get('#percentageAirDrySelect').select('10% of my Laundry')
    cy.get('#fridgeSelect').select('Will Not Do')
    cy.get('#furnaceSelect').select('Will Not Do')
    cy.get('#windowSelect').select('Will Not Do')

})

Cypress.Commands.add('primary_heating_reduce_zero_already_done', () => {

    cy.get('#energyAC').type('0')
    cy.get('#energyHeat').type('0')
    cy.get('#lightsToReplace').type('0')
    cy.get('#pwrMgmtSelect').select('Already Done')
    cy.get('#increaseGreenInput').type('0')
    cy.get('#coldWaterSelect').select('Already Done')
    cy.get('#loadsPerWeek').type('2')
    cy.get('#AirDrySelect').select('Already Done')
    cy.get('#percentageAirDrySelect').select('10% of my Laundry')
    cy.get('#fridgeSelect').select('Already Done')
    cy.get('#furnaceSelect').select('Already Done')
    cy.get('#windowSelect').select('Already Done')

})

Cypress.Commands.add('primary_heating_reduce_default_values_will_do', () => {

    cy.get('#energyAC').type('70')
    cy.get('#energyHeat').type('70')
    cy.get('#lightsToReplace').type('5')
    cy.get('#pwrMgmtSelect').select('Will Do')
    cy.get('#increaseGreenInput').type('50')
    cy.get('#coldWaterSelect').select('Will Do')
    cy.get('#loadsPerWeek').type('2')
    cy.get('#AirDrySelect').select('Will Do')
    cy.get('#percentageAirDrySelect').select('All my Laundry')
    cy.get('#fridgeSelect').select('Will Do')
    cy.get('#furnaceSelect').select('Will Do')
    cy.get('#windowSelect').select('Will Do')

})

Cypress.Commands.add('default_flow_without_car_and_waste', () => {

    cy.get('#to-transportation').click()
    cy.get('.sectionName').contains('Transportation').should('be.visible')
    cy.get('#numVehiclesInput').select('0')
    cy.get('#to-waste').click()
    cy.get('.sectionName').contains('Waste').should('be.visible')
    cy.get('#to-report').click()
    cy.get('.sectionName').contains('Your Household Carbon Footprint Report').should('be.visible')

})

Cypress.Commands.add('message_error_without_primary_heating', () => {

    cy.get('#naturalGasTextInput').type('23')
    cy.get('#errorMessageBox').should('be.visible')
    cy.get('.errorMessageBox > .ui-dialog-titlebar > .ui-dialog-titlebar-close > .ui-icon').click()

})

Cypress.Commands.add('message_error_without_natural_gas_primary_heating_values', () => {

    cy.get('#primaryHeatingSource').select('Natural Gas')
    cy.get('#energyHeat').type('70')
    cy.get('#errorMessageBox').should('be.visible')
    cy.get('#error-monthly-utility').should('have.text', 'You must have an entry for Monthly Natural Gas bill.')

})

Cypress.Commands.add('message_error_without_electricity_primary_heating_values', () => {

    cy.get('#primaryHeatingSource').select('Electricity')
    cy.get('#energyHeat').type('70')
    cy.get('#errorMessageBox').should('be.visible')
    cy.get('#error-monthly-utility').should('have.text', 'You must have an entry for Monthly Electricity bill.')

})

Cypress.Commands.add('message_error_without_fuel_oil_primary_heating_values', () => {

    cy.get('#primaryHeatingSource').select('Fuel Oil')
    cy.get('#energyHeat').type('70')
    cy.get('#errorMessageBox').should('be.visible')
    cy.get('#error-monthly-utility').should('have.text', 'You must have an entry for Monthly Fuel Oil bill.')

})

Cypress.Commands.add('message_error_without_propane_primary_heating_values', () => {

    cy.get('#primaryHeatingSource').select('Propane')
    cy.get('#energyHeat').type('70')
    cy.get('#errorMessageBox').should('be.visible')
    cy.get('#error-monthly-utility').should('have.text', 'You must have an entry for Monthly Propane bill.')

})

// FINAL REPORT

Cypress.Commands.add('good_work_message', () => {

    cy.get('#good-work-msg').should('be.visible')

})

Cypress.Commands.add('no_good_work_message', () => {

    cy.get('#good-work-msg').should('not.be.visible')

})

Cypress.Commands.add('energy_show_chart', () => {
    cy.get('#transKey').click()
    cy.get('#wasteKey').click()

    cy.get('#current-total > .rowChart > .rowItems > .homeEnergyCharItem').should('be.visible')
    cy.get('#current-total > .rowChart > .rowItems > .transportationCharItem').should('not.be.visible')
    cy.get('#current-total > .rowChart > .rowItems > .wasteCharItem').should('not.be.visible')

    cy.get('#new-total > .rowChart > .rowItems > .homeEnergyCharItem').should('be.visible')
    cy.get('#new-total > .rowChart > .rowItems > .transportationCharItem').should('not.be.visible')
    cy.get('#new-total > .rowChart > .rowItems > .wasteCharItem').should('not.be.visible')

    cy.get('#us-avg > .rowChart > .rowItems > .homeEnergyCharItem').should('be.visible')
    cy.get('#us-avg > .rowChart > .rowItems > .transportationCharItem').should('not.be.visible')
    cy.get('#us-avg > .rowChart > .rowItems > .wasteCharItem').should('not.be.visible')
})

Cypress.Commands.add('transport_show_chart', () => {
    cy.get('#homeKey').click()
    cy.get('#wasteKey').click()

    cy.get('#current-total > .rowChart > .rowItems > .homeEnergyCharItem').should('not.be.visible')
    cy.get('#current-total > .rowChart > .rowItems > .transportationCharItem').should('be.visible')
    cy.get('#current-total > .rowChart > .rowItems > .wasteCharItem').should('not.be.visible')

    cy.get('#new-total > .rowChart > .rowItems > .homeEnergyCharItem').should('not.be.visible')
    cy.get('#new-total > .rowChart > .rowItems > .transportationCharItem').should('be.visible')
    cy.get('#new-total > .rowChart > .rowItems > .wasteCharItem').should('not.be.visible')

    cy.get('#us-avg > .rowChart > .rowItems > .homeEnergyCharItem').should('not.be.visible')
    cy.get('#us-avg > .rowChart > .rowItems > .transportationCharItem').should('be.visible')
    cy.get('#us-avg > .rowChart > .rowItems > .wasteCharItem').should('not.be.visible')
})

Cypress.Commands.add('waste_show_chart', () => {
    cy.get('#homeKey').click()
    cy.get('#transKey').click()

    cy.get('#current-total > .rowChart > .rowItems > .homeEnergyCharItem').should('not.be.visible')
    cy.get('#current-total > .rowChart > .rowItems > .transportationCharItem').should('not.be.visible')
    cy.get('#current-total > .rowChart > .rowItems > .wasteCharItem').should('be.visible')

    cy.get('#new-total > .rowChart > .rowItems > .homeEnergyCharItem').should('not.be.visible')
    cy.get('#new-total > .rowChart > .rowItems > .transportationCharItem').should('not.be.visible')
    cy.get('#new-total > .rowChart > .rowItems > .wasteCharItem').should('be.visible')

    cy.get('#us-avg > .rowChart > .rowItems > .homeEnergyCharItem').should('not.be.visible')
    cy.get('#us-avg > .rowChart > .rowItems > .transportationCharItem').should('not.be.visible')
    cy.get('#us-avg > .rowChart > .rowItems > .wasteCharItem').should('be.visible')
})

Cypress.Commands.add('print_icon_button', () => {
    cy.get('#printicon').should('be.visible')
})

Cypress.Commands.add('share_button', () => {
    cy.get('#openSharePanel').should('be.visible')
})

Cypress.Commands.add('small_actions_session', () => {
    cy.get('#small-actions > :nth-child(1) > h2').should('be.visible')
})

// TRANSPORTATION PAGE

Cypress.Commands.add('one_car_average_cost', () => {
    cy.get('#numVehiclesInput').select('1')
    cy.get('#maintCurrentSelect').select('Do Not Do')
    cy.get('#vehicle1Miles').type('12,480')
    cy.get('#vehicle1Select').select('Per Year')
    cy.get('#vehicle1GasMileage').type('21')
    cy.get('#maintReduceSelect').select('Will Do')
    cy.get('#reduceMilesInput1').type('100')
    cy.get('#reduceMilesSelect1').select('Per Year')
    cy.get('#replaceVehicleInput1').type('100')
})

Cypress.Commands.add('default_flow_to_report_from_transport', () => {
    cy.get('#to-waste').click()
    cy.get('.sectionName').contains('Waste').should('be.visible')
    cy.get('#to-report').click()
    cy.get('.sectionName').contains('Your Household Carbon Footprint Report').should('be.visible')
})

    Cypress.Commands.add('five_car_average_cost', () => {
        cy.get('#numVehiclesInput').select('5')
        cy.get('#maintCurrentSelect').select('Do Not Do')

        // VEICULO 1

        cy.get('#vehicle1Miles').type('12,480')
        cy.get('#vehicle1Select').select('Per Year')
        cy.get('#vehicle1GasMileage').type('21')
        cy.get('#maintReduceSelect').select('Will Do')
        cy.get('#reduceMilesInput1').type('100')
        cy.get('#reduceMilesSelect1').select('Per Year')
        cy.get('#replaceVehicleInput1').type('100')

        // VEICULO 2

        cy.get('#vehicle2Miles').type('12,480')
        cy.get('#vehicle2Select').select('Per Year')
        cy.get('#vehicle2GasMileage').type('21')
        cy.get('#reduceMilesInput2').type('100')
        cy.get('#reduceMilesSelect2').select('Per Year')
        cy.get('#replaceVehicleInput2').type('100')

        // VEICULO 3

        cy.get('#vehicle3Miles').type('12,480')
        cy.get('#vehicle3Select').select('Per Year')
        cy.get('#vehicle3GasMileage').type('21')
        cy.get('#reduceMilesInput3').type('100')
        cy.get('#reduceMilesSelect3').select('Per Year')
        cy.get('#replaceVehicleInput3').type('100')

        // VEICULO 4

        cy.get('#vehicle4Miles').type('12,480')
        cy.get('#vehicle4Select').select('Per Year')
        cy.get('#vehicle4GasMileage').type('21')
        cy.get('#reduceMilesInput4').type('100')
        cy.get('#reduceMilesSelect4').select('Per Year')
        cy.get('#replaceVehicleInput4').type('100')

        // VEICULO 5

        cy.get('#vehicle5Miles').type('12,480')
        cy.get('#vehicle5Select').select('Per Year')
        cy.get('#vehicle5GasMileage').type('21')
        cy.get('#reduceMilesInput5').type('100')
        cy.get('#reduceMilesSelect5').select('Per Year')
        cy.get('#replaceVehicleInput5').type('100')
    })

    Cypress.Commands.add('one_car_average_cost_maintenance_done', () => {
        cy.get('#numVehiclesInput').select('1')
        cy.get('#maintCurrentSelect').select('Already Done')
        cy.get('#vehicle1Miles').type('12,480')
        cy.get('#vehicle1Select').select('Per Year')
        cy.get('#vehicle1GasMileage').type('21')
        cy.get('#reduceMilesInput1').type('100')
        cy.get('#reduceMilesSelect1').select('Per Year')
        cy.get('#replaceVehicleInput1').type('100')
    })

    Cypress.Commands.add('transportation_validation_page', () => {
        cy.get('#to-transportation').click()
        cy.get('.sectionName').contains('Transportation').should('be.visible')
    })


