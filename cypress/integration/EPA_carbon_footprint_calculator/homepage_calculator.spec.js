describe('EPAs Carbon Footprint Calculator Home Page', () => {

    beforeEach(() =>{
        cy.visit('https://www3.epa.gov/carbon-footprint-calculator/')
    })

    // TESTES POSITIVOS

    it.only('Acessando calculadora', () => {
        cy.get('#ppl-in-household-input').type('1')
        cy.get('#zip-code-input').type('12345')
        cy.get('#get-started').click()
        cy.wait(3000)
        cy.get('.sectionName').should('be.visible')
        cy.scrollTo(500, 0); 
    })

    it('Teste com 1 pessoa com gastos padroes, sem carro e sem descarte de residuos', () => {
        cy.get('#ppl-in-household-input').type('1')
        cy.get('#zip-code-input').type('12345')
        cy.get('#get-started').click()
        cy.wait(3000)
        cy.get('.sectionName').contains('Home Energy').should('be.visible')
        cy.scrollTo(500, 0)
        cy.get('#primaryHeatingSource').select('Natural Gas')
        cy.get('#naturalGasTextInput').type('23')
        cy.get('#electricityTextInput').type('44')
        cy.get('#electricityGreenTextInput').type('80')
        cy.get('#fuelTextInput').type('72')
        cy.get('#propaneTextInput').type('37')
        cy.get('#to-transportation').click()
        cy.get('.sectionName').contains('Transportation').should('be.visible')
        cy.get('#numVehiclesInput').select('0')
        cy.get('#to-waste').click()
        cy.get('.sectionName').contains('Waste').should('be.visible')
        cy.get('#to-report').click()
        cy.get('.sectionName').contains('Your Household Carbon Footprint Report').should('be.visible')
    })

    it('Teste com 20 pessoas com gastos padroes, sem carro e sem descarte de residuos', () => {
        cy.get('#ppl-in-household-input').type('20')
        cy.get('#zip-code-input').type('12345')
        cy.get('#get-started').click()
        cy.wait(3000)
        cy.get('.sectionName').contains('Home Energy').should('be.visible')
        cy.scrollTo(500, 0)
        cy.get('#primaryHeatingSource').select('Natural Gas')
        cy.get('#naturalGasTextInput').type('23')
        cy.get('#electricityTextInput').type('44')
        cy.get('#electricityGreenTextInput').type('80')
        cy.get('#fuelTextInput').type('72')
        cy.get('#propaneTextInput').type('37')
        cy.get('#to-transportation').click()
        cy.get('.sectionName').contains('Transportation').should('be.visible')
        cy.get('#numVehiclesInput').select('0')
        cy.get('#to-waste').click()
        cy.get('.sectionName').contains('Waste').should('be.visible')
        cy.get('#to-report').click()
        cy.get('.sectionName').contains('Your Household Carbon Footprint Report').should('be.visible')
    })

    it('Teste com 50 pessoa com gastos padroes, sem carro e sem descarte de residuos', () => {
        cy.get('#ppl-in-household-input').type('50')
        cy.get('#zip-code-input').type('12345')
        cy.get('#get-started').click()
        cy.wait(3000)
        cy.get('.sectionName').contains('Home Energy').should('be.visible')
        cy.scrollTo(500, 0)
        cy.get('#primaryHeatingSource').select('Natural Gas')
        cy.get('#naturalGasTextInput').type('23')
        cy.get('#electricityTextInput').type('44')
        cy.get('#electricityGreenTextInput').type('80')
        cy.get('#fuelTextInput').type('72')
        cy.get('#propaneTextInput').type('37')
        cy.get('#to-transportation').click()
        cy.get('.sectionName').contains('Transportation').should('be.visible')
        cy.get('#numVehiclesInput').select('0')
        cy.get('#to-waste').click()
        cy.get('.sectionName').contains('Waste').should('be.visible')
        cy.get('#to-report').click()
        cy.get('.sectionName').contains('Your Household Carbon Footprint Report').should('be.visible')
    })

    it('Caso de teste realizando a verificacao de link da secao "About"', () => {
        cy.scrollTo(0, 500)
        cy.get('#copy-driven-content > :nth-child(1) > h3').contains('About')
        cy.get('span > .bold-n-blue').should('be.visible')
    })

    it('Caso de teste realizando a verificacao de link da secao "How To"', () => {
        cy.scrollTo(0, 500)
        cy.get('#copy-driven-content > :nth-child(2) > h3').contains('How To')
        cy.get('[href="https://fueleconomy.gov"]').should('be.visible')
        cy.get('[href="https://www.fueleconomy.gov/mpg/MPG.do?action=calcMPG"]').should('be.visible')
    })

    it('Caso de teste realizando a verificacao de download da calculadora offline', () => {
        cy.scrollTo(0, 500)
        cy.get('#copy-driven-content > :nth-child(3) > h3').contains('Download')
        cy.get('li > button').should('be.visible')
    })

    //TESTES NEGATIVOS

    it('Teste de numero de zipcode invalido', () => {
        cy.get('#ppl-in-household-input').type('1')
        cy.get('#zip-code-input').type('00000')
        cy.get('#get-started').click()
        cy.wait(2000)
        cy.get('#invalidZip').should('be.visible')
        cy.scrollTo(500, 0)
    })

    it('Teste de numero de zipcode com 3 digitos', () => {
        cy.get('#ppl-in-household-input').type('1')
        cy.get('#zip-code-input').type('123')
        cy.get('#get-started').click()
        cy.wait(2000)
        cy.get('#invalidZipNum').should('be.visible')
        cy.scrollTo(500, 0)
    })

    it('Teste de numero de zipcode com 0 digitos', () => {
        cy.get('#ppl-in-household-input').type('1')
        cy.get('#zip-code-input').type(' ')
        cy.get('#get-started').click()
        // cy.wait(2000)
        cy.get('#invalidZipNum').should('be.visible')
        cy.scrollTo(500, 0)
    })

    it('Caso de teste onde nao e inserido numero de pessoas e zipcode', () => {
        cy.get('#ppl-in-household-input').type(' ')
        cy.get('#zip-code-input').type(' ')
        cy.get('#get-started').click()
        // cy.wait(2000)
        cy.get('#invalidNum').should('be.visible')
        cy.get('#invalidZipNum').should('be.visible')
        cy.scrollTo(500, 0)
    })

    it('Caso de teste onde nao e inserido numero de pessoas e zipcode seja incorreto', () => {
        cy.get('#ppl-in-household-input').type(' ')
        cy.get('#zip-code-input').type('00000')
        cy.get('#get-started').click()
        // cy.wait(2000)
        cy.get('#invalidNum').should('be.visible')
        cy.scrollTo(500, 0)
    })

    it('Caso de teste onde nao e inserido numero de pessoas e zipcode seja correto', () => {
        cy.get('#ppl-in-household-input').type(' ')
        cy.get('#zip-code-input').type('12345')
        cy.get('#get-started').click()
        // cy.wait(2000)
        cy.get('#invalidNum').should('be.visible')
        cy.scrollTo(500, 0)
    })

    it('Caso de teste onde nao e inserido numero de pessoas e zipcode esteja com menos de 5 numeros', () => {
        cy.get('#ppl-in-household-input').type(' ')
        cy.get('#zip-code-input').type('123')
        cy.get('#get-started').click()
        // cy.wait(2000)
        cy.get('#invalidNum').should('be.visible')
        cy.get('#invalidZipNum').should('be.visible')
        cy.scrollTo(500, 0)
    })

    it('Caso de teste onde nao e inserido numero de pessoas e zipcode esteja com menos de 5 numeros', () => {
        cy.get('#ppl-in-household-input').type('e')
        cy.get('#zip-code-input').type('e')
        cy.get('#get-started').click()
        // cy.wait(2000)
        cy.get('#invalidNum').should('be.visible')
        cy.get('#invalidZipNum').should('be.visible')
        cy.scrollTo(500, 0)
    })

    it('Caso de teste onde nao e inserido numero de pessoas e zipcode esteja com menos de 5 numeros', () => {
        cy.get('#ppl-in-household-input').type(',')
        cy.get('#zip-code-input').type(',')
        cy.get('#get-started').click()
        // cy.wait(2000)
        cy.get('#invalidNum').should('be.visible')
        cy.get('#invalidZipNum').should('be.visible')
        cy.scrollTo(500, 0)
    })
})