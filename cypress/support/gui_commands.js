
// HOME PAGE COMMANDS

Cypress.Commands.add('default_residents_zipcode', () => {

    cy.get('#ppl-in-household-input').type('1')
    cy.get('#zip-code-input').type('12345') 
    cy.get('#get-started').click()

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
