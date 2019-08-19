Cypress._.times(200, (i) => {
  describe(`${i}Opens PDP mobile`, () => {
    beforeEach(() => {
      cy.viewport(375, 667);
      cy.visit('/');
    });
    it('Opens PDP from All Football Boots category', () => {
      cy.get('#mobileMenu').click();
      cy.get('.SlideMenu > :nth-child(1) > ul > :nth-child(2)').click();
      cy.get('.SlideMenu > :nth-child(2) > ul > :nth-child(2) a').click({ force: true });
      cy.get('.product').should('be.visible');
      cy.get('.name-wrap')
        .eq(0)
        .text()
        .as('productTitle');
      cy.get('.image-wrap')
        .eq(0)
        .then((productImage) => {
          const productPageHref = productImage.parent('a').attr('href');
          productImage.click();
          cy.url().should('contain', productPageHref);
          cy.get('@productTitle').then(title => cy.get('#pdp-title').should('contain', title));
          cy.get('.fullPrice', /\d+/).should('exist');
        });

      cy.get('.search-query').type('Adidas{enter}');
      cy.get('.product').should('be.visible');

      cy.get('.image-wrap')
        .eq(0)
        .then((productImage) => {
          const productPageHref = productImage.parent('a').attr('href');
          productImage.click();
          cy.url().should('contain', productPageHref);
          cy.get('@productTitle').then(title => cy.get('#pdp-title').should('contain', title));
          cy.get('.fullPrice', /\d+/).should('exist');
        });
    });
  });
});
