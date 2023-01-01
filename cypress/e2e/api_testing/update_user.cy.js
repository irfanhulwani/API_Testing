describe('Successfully Updated User', () => {
    it('Update User', () => {
        var newUser = {
            "name": "Irfan",
            "job": "QA Engineer"
        }
        cy.request('PUT', 'https://reqres.in/api/users/2', newUser).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(newUser.name)
        })
    })
})