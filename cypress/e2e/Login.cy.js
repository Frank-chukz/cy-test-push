
describe('All Login Tests', () => {

    
    it.only('Login with correct details', () => {
        cy.visit('https://alphaadmin.vpay.africa/')
        cy.url().should('include','alpha')
        cy.get("input[placeholder='Email Address']").type('frankadmintest@givmail.com')
        cy.get("input[placeholder='Password']").type('rTvjG9fp')
        cy.get("button[type='button']").click()   
        
        cy.title().should('eq','VPay Admin') //verify the title of the page

        cy.get('.page-title').contains('Dashboard') //proof you've logged in cos dasboard is not seen

    })

    it('Login with incorrect details', () => {
        cy.visit('https://alphaadmin.vpay.africa/')
        cy.get("input[placeholder='Email Address']").type('frankadminmmtest@givmail.com')
        cy.get("input[placeholder='Password']").type('rTvjG9fp')
        cy.get("button[type='button']").click()   
        
        cy.title().should('eq','VPay Admin') //verify the title of the page

    })













})