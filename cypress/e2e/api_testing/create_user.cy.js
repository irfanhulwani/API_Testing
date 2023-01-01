describe('Create New User', () => {
  it('Successfully Created New User', () =>{
        var users = {
            "name": "Irfan",
            "job": "QA Engineer"
        }
        cy.request('POST', 'https://reqres.in/api/users', users).then((response) => {
            expect(response.status).equal(201);
            expect(response.body).to.have.property('name', 'Irfan');
            expect(response.body).to.have.property('job', 'QA Engineer');
        })
  })  
})