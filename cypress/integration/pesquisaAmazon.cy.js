describe('Pesquisa barra de pesquisa tela inicial', () => {
    context('Pesquisar produto válido (POSITIVO)', () => {
        it('acesso o sistema simplesmente a pesquisar produtos', () => {
            cy.visit('https://www.amazon.com.br/')
        })

        it('acesso a barra de pesquisas no topo do site', () => {
            cy.get('input[id="twotabsearchtextbox"]').type('ps5')
            cy.get('input[id="nav-search-submit-button"]').click()
        })

        it('o sistema realiza a pesquisa conforme esperado', () => {
            cy.get('div[class="a-section a-spacing-small a-spacing-top-small"]').should('contains.text', 'ps5')
        })

        it('verifico o produto da minha escolha', () => {
            cy.get('a[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]')
            .contains('PlayStation®5 Slim Edição Digital com 2 Jogos')
            .click();
    })
})

})