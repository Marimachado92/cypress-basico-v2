Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Mariana')
    cy.get('#lastName').type('Machado')
    cy.get('#email').type('mariana.machado@zero-defect.com.br')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})
