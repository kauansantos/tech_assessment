describe('EPAs Carbon Footprint Calculator Waste Page', () => {

    beforeEach(() =>{
        cy.visit('https://www3.epa.gov/carbon-footprint-calculator/')
    })

    // TESTES COM VARIACAO DE DESCARTES

    it('Teste com 1 pessoa com principal fonte de aquecimento "Natural Gas" usando gastos padroes, sem carro e sem descarte de residuos', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
 
 
 
 cy.primary_heating_average_values('Natural Gas')
cy.default_flow_without_car_and_waste()
    })

    it('Teste com 1 pessoa com principal fonte de aquecimento "Natural Gas" usando gastos padroes, sem carro e reciclando apenas plástico', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
 
 
 
 cy.primary_heating_average_values('Natural Gas')
        cy.get('#to-transportation').click()
        cy.get('.sectionName').contains('Transportation').should('be.visible')
        cy.get('#numVehiclesInput').select('0')
        cy.get('#to-waste').click()

        cy.get('.sectionName').contains('Waste').should('be.visible')
        cy.get('#plasticCheckbox').click()

        cy.get('#to-report').click()
        cy.get('.sectionName').contains('Your Household Carbon Footprint Report').should('be.visible')
    })

    it('Teste com 1 pessoa com principal fonte de aquecimento "Natural Gas" usando gastos padroes, sem carro e reciclando todas opções', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
 
 
 
 cy.primary_heating_average_values('Natural Gas')
        cy.get('#to-transportation').click()
        cy.get('.sectionName').contains('Transportation').should('be.visible')
        cy.get('#numVehiclesInput').select('0')
        cy.get('#to-waste').click()

        cy.get('.sectionName').contains('Waste').should('be.visible')
        cy.get('#plasticCheckbox').click()
        cy.get('#aluminumCheckbox').click()
        cy.get('#glassCheckbox').click()
        cy.get('#newspaperCheckbox').click()
        cy.get('#magazinesCheckbox').click()

        cy.get('#to-report').click()
        cy.get('.sectionName').contains('Your Household Carbon Footprint Report').should('be.visible')
    })

    it('Teste com 1 pessoa com principal fonte de aquecimento "Natural Gas" usando gastos padroes, sem carro e sem descarte de residuos e iniciando a reciclagem apenas de vidro', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
 
 
 
 cy.primary_heating_average_values('Natural Gas')
        cy.get('#to-transportation').click() 
        cy.get('.sectionName').contains('Transportation').should('be.visible')
        cy.get('#numVehiclesInput').select('0')
        cy.get('#to-waste').click()

        cy.get('.sectionName').contains('Waste').should('be.visible')
        cy.get('#glassCheckboxR').click()
        
        cy.get('#to-report').click()
        cy.get('.sectionName').contains('Your Household Carbon Footprint Report').should('be.visible')
    })

    it('Teste com 1 pessoa com principal fonte de aquecimento "Natural Gas" usando gastos padroes, sem carro e sem descarte de residuos e iniciando a reciclagem de todas as opcoes', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
 
 
 
 cy.primary_heating_average_values('Natural Gas')
        cy.get('#to-transportation').click() 
        cy.get('.sectionName').contains('Transportation').should('be.visible')
        cy.get('#numVehiclesInput').select('0')
        cy.get('#to-waste').click()

        cy.get('.sectionName').contains('Waste').should('be.visible')
        cy.get('#aluminumCheckboxR').click()
        cy.get('#plasticCheckboxR').click()
        cy.get('#glassCheckboxR').click()
        cy.get('#newspaperCheckboxR').click()
        cy.get('#magazinesCheckboxR').click()
        
        cy.get('#to-report').click()
        cy.get('.sectionName').contains('Your Household Carbon Footprint Report').should('be.visible')
    })
})