
describe ('All Assertions', () => {

it('implicit assertions', () => {

    cy.visit('alphaadmin.vpay.africa')
    // cy.url().should('include','alpha')
    // cy.url().should('eq', 'https://alphaadmin.vpay.africa/')
    // cy.url.should('contain', 'alphaadmin')

    //OR

    // cy.url().should('include','alpha')
    // .should('eq', 'https://alphaadmin.vpay.africa/')
    // .should('contain', 'alphaadmin')

    //OR

    // cy.url().should('include','alpha’)                                       //use ‘and’ multiple times 
    //        .and(‘eq', 'https://alphaadmin.vpay.africa/')
    //        .and(‘contain', 'alphaadmin')
    
   
    // cy.url().should('not.include','alvpha')
    // .and('not.eq', 'hgttps://alphaadmin.vpay.africa/')
    // .and('not.contain', 'aalphaadmin')

    cy.title().should('include','VPay Admin')
                .and('eq','VPay Admin')

})


it.only('implicit assetion on icon', () => {
    cy.visit('https://alphaadmin.vpay.africa/')
    //cy.url().should('include','alpha')
    cy.get("input[placeholder='Email Address']").type('frankadmintest@givmail.com')

    cy.get("input[placeholder='Email Address']").should('have.value','frankadmintest@givmail.com')

    cy.get("input[placeholder='Password']").type('rTvjG9fp')
    cy.get("button[type='button']").click()   
    
   // cy.title().should('eq','VPay Admin') //verify the title of the page

    //cy.get('.page-title').contains('Dashboard') //proof you've logged in cos dasboard is not seen

    cy.get("img[src='/static/media/logo_.91e11322.svg']").should('be.visible').and('exist') //checks tht icon is present

    cy.get('a') //get all anchor links
            .should('have.length', 2) //assert that the anchor tags is 2 on the page

    // cy.get('a').should('have.length.greaterThan', 0).then((links) => {
    //     const numberOfLinks = links.length;
    //     cy.log(`Total number of links on the page: ${numberOfLinks}`);
    //   });




})





})