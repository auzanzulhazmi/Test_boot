describe('Cypress Demo-Login',() => {
    it('login scenario',() => {
        cy.visit('http://siakad.polinema.ac.id/index.php')
        cy.get('#username').type('*******')
        cy.get('#password').type('*******')
        cy.get('.form-actions > .btn').click()
        cy.title().should('include','Sistem Informasi Akademik')
  
    })
})
