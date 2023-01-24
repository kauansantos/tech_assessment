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
        cy.flow_to_waste()
        cy.selecting_plastic_already_recycle()
        cy.report_validation()
    })

    it('Teste com 1 pessoa com principal fonte de aquecimento "Natural Gas" usando gastos padroes, sem carro e reciclando todas opções', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.primary_heating_average_values('Natural Gas')
        cy.flow_to_waste()
        cy.selecting_all_already_recycle()
        cy.report_validation()
    })

    it('Teste com 1 pessoa com principal fonte de aquecimento "Natural Gas" usando gastos padroes, sem carro e sem descarte de residuos e iniciando a reciclagem apenas de vidro', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.primary_heating_average_values('Natural Gas')
        cy.flow_to_waste()
        cy.selecting_glass_will_recycle()
        cy.report_validation()
    })

    it('Teste com 1 pessoa com principal fonte de aquecimento "Natural Gas" usando gastos padroes, sem carro e sem descarte de residuos e iniciando a reciclagem de todas as opcoes', () => {
        cy.default_residents_zipcode()
        cy.wait(3000)
        cy.asserting_page_home_energy()
        cy.primary_heating_average_values('Natural Gas')
        cy.flow_to_waste()
        cy.selecting_all_will_recycle()
        cy.report_validation()
    })
})