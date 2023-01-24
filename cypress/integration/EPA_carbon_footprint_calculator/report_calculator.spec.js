describe('EPAs Carbon Footprint Calculator Report', () => {

    beforeEach(() =>{
        cy.visit('https://www3.epa.gov/carbon-footprint-calculator/')
    })

    it('Teste de uma casa com 1 pessoa no zipcode 12345 com gastos padrões que resultado da soma dos gastos seja menor que a media dos Estados Unidos;', () => {
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

        cy.get('#good-work-msg').should('be.visible')

    })

    it('Teste de uma casa com 1 pessoa no zipcode 12345 com gastos padrões que resultado da soma dos gastos seja maior que a media dos Estados Unidos;', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.get('#primaryHeatingSource').select('Natural Gas')
        cy.get('#naturalGasTextInput').type('1000')
        cy.get('#electricityTextInput').type('1000')
        cy.get('#electricityGreenTextInput').type('0')
        cy.get('#fuelTextInput').type('1000')
        cy.get('#propaneTextInput').type('1000')
cy.default_flow_without_car_and_waste()
    
        cy.get('#good-work-msg').should('not.be.visible')
    
    })

    it('Teste de uma casa com 1 pessoa no zipcode 12345 com gastos padrões que seja exibido apenas “Home Energy” no relatorio final', () => {
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

    it('Teste de uma casa com 1 pessoa no zipcode 12345 com gastos padrões que seja exibido apenas “Transportation” no relatorio final', () => {
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

    it('Teste de uma casa com 1 pessoa no zipcode 12345 com gastos padrões que seja exibido apenas “Transportation” no relatorio final', () => {
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

    it('Teste de uma casa com 1 pessoa no zipcode 12345 com gastos padrões que seja exibido apenas “Transportation” no relatorio final', () => {
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

        cy.get('#printicon').should('be.visible')
    })

    it('Teste de uma casa com 1 pessoa no zipcode 12345 com gastos padrões que seja exibido apenas “Transportation” no relatorio final', () => {
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

        cy.get('#openSharePanel').should('be.visible')
    })

    it.only('Teste de uma casa com 1 pessoa no zipcode 12345 com gastos padrões que seja exibido apenas “Transportation” no relatorio final', () => {
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

        cy.get('#small-actions > :nth-child(1) > h2').should('be.visible')
    })

})