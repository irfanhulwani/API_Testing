describe('Get User List', () => {
    it('Verify list user will displayed', () =>{
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?=2&per_pages=1&delay=3'
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    })
})