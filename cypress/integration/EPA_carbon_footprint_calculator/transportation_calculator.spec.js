describe('EPAs Carbon Footprint Calculator', () => {

    beforeEach(() =>{
        cy.visit('https://www3.epa.gov/carbon-footprint-calculator/')
    })

    // TESTES COM VARIACAO DE VEICULOS

    it('Teste com 1 pessoa com principal fonte de aquecimento "Natural Gas" usando gastos padroes, sem carro e sem descarte de residuos', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.get('#primaryHeatingSource').select('Natural Gas')
        cy.get('#naturalGasTextInput').type('23')
        cy.get('#electricityTextInput').type('44')
        cy.get('#electricityGreenTextInput').type('80')
        cy.get('#fuelTextInput').type('72')
        cy.get('#propaneTextInput').type('37')
cy.default_flow_without_car_and_waste()
    })

    it('Teste com 1 pessoa com principal fonte de aquecimento "Natural Gas" usando gastos padroes, com 1 carro com gastos padroes e sem descarte de residuos', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.get('#primaryHeatingSource').select('Natural Gas')
        cy.get('#naturalGasTextInput').type('23')
        cy.get('#electricityTextInput').type('44')
        cy.get('#electricityGreenTextInput').type('80')
        cy.get('#fuelTextInput').type('72')
        cy.get('#propaneTextInput').type('37')
        cy.get('#to-transportation').click()
        cy.get('.sectionName').contains('Transportation').should('be.visible')

        cy.get('#numVehiclesInput').select('1')
        cy.get('#maintCurrentSelect').select('Do Not Do')
        cy.get('#vehicle1Miles').type('12,480')
        cy.get('#vehicle1Select').select('Per Year')
        cy.get('#vehicle1GasMileage').type('21')
        cy.get('#maintReduceSelect').select('Will Do')
        cy.get('#reduceMilesInput1').type('100')
        cy.get('#reduceMilesSelect1').select('Per Year')
        cy.get('#replaceVehicleInput1').type('100')


        cy.get('#to-waste').click()
        cy.get('.sectionName').contains('Waste').should('be.visible')
        cy.get('#to-report').click()
        cy.get('.sectionName').contains('Your Household Carbon Footprint Report').should('be.visible')
    })

    it('Teste com 1 pessoa com principal fonte de aquecimento "Natural Gas" usando gastos padroes, com 5 carro com gastos padroes e sem descarte de residuos', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.get('#primaryHeatingSource').select('Natural Gas')
        cy.get('#naturalGasTextInput').type('23')
        cy.get('#electricityTextInput').type('44')
        cy.get('#electricityGreenTextInput').type('80')
        cy.get('#fuelTextInput').type('72')
        cy.get('#propaneTextInput').type('37')
        cy.get('#to-transportation').click()
        cy.get('.sectionName').contains('Transportation').should('be.visible')

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


        cy.get('#to-waste').click()
        cy.get('.sectionName').contains('Waste').should('be.visible')
        cy.get('#to-report').click()
        cy.get('.sectionName').contains('Your Household Carbon Footprint Report').should('be.visible')
    })

    it('Teste com 1 pessoa com principal fonte de aquecimento "Natural Gas" usando gastos padroes, com 1 carro com gastos padroes e manutencao ja feitas e sem descarte de residuos', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.get('#primaryHeatingSource').select('Natural Gas')
        cy.get('#naturalGasTextInput').type('23')
        cy.get('#electricityTextInput').type('44')
        cy.get('#electricityGreenTextInput').type('80')
        cy.get('#fuelTextInput').type('72')
        cy.get('#propaneTextInput').type('37')
        cy.get('#to-transportation').click()
        cy.get('.sectionName').contains('Transportation').should('be.visible')

        cy.get('#numVehiclesInput').select('1')
        cy.get('#maintCurrentSelect').select('Already Done')
        cy.get('#vehicle1Miles').type('12,480')
        cy.get('#vehicle1Select').select('Per Year')
        cy.get('#vehicle1GasMileage').type('21')
        cy.get('#reduceMilesInput1').type('100')
        cy.get('#reduceMilesSelect1').select('Per Year')
        cy.get('#replaceVehicleInput1').type('100')


        cy.get('#to-waste').click()
        cy.get('.sectionName').contains('Waste').should('be.visible')
        cy.get('#to-report').click()
        cy.get('.sectionName').contains('Your Household Carbon Footprint Report').should('be.visible')
    })

})