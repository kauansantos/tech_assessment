describe('EPAs Carbon Footprint Calculator', () => {

    beforeEach(() =>{
        cy.visit('https://www3.epa.gov/carbon-footprint-calculator/')
    })

    // TESTES COM VARIACAO DE VEICULOS

    it('Teste com 1 pessoa com principal fonte de aquecimento "Natural Gas" usando gastos padroes, sem carro e sem descarte de residuos', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.primary_heating_average_values('Natural Gas')
        cy.default_flow_without_car_and_waste()
    })

    it('Teste com 1 pessoa com principal fonte de aquecimento "Natural Gas" usando gastos padroes, com 1 carro com gastos padroes e sem descarte de residuos', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.primary_heating_average_values('Natural Gas')
        cy.transportation_validation_page()
        cy.one_car_average_cost()
        cy.default_flow_to_report_from_transport()
    })

    it('Teste com 1 pessoa com principal fonte de aquecimento "Natural Gas" usando gastos padroes, com 5 carro com gastos padroes e sem descarte de residuos', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.primary_heating_average_values('Natural Gas')
        cy.transportation_validation_page()
        cy.five_car_average_cost()
        cy.default_flow_to_report_from_transport()
    })

    it('Teste com 1 pessoa com principal fonte de aquecimento "Natural Gas" usando gastos padroes, com 1 carro com gastos padroes e manutencao ja feitas e sem descarte de residuos', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.primary_heating_average_values('Natural Gas')
        cy.transportation_validation_page()
        cy.one_car_average_cost_maintenance_done()
        cy.default_flow_to_report_from_transport()
    })

})