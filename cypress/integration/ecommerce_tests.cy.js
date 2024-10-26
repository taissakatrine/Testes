describe('Testes de E-commerce em AutomationExercise', () => {

  // Visita a página inicial do site
  beforeEach(() => {
    cy.visit('https://automationexercise.com');
  });

  // Busca um produto na página principal
  it('Cenário 1: Realizar uma busca por um produto', () => {
    cy.get('input[name="search"]').type('Tshirt'); // Digita "Tshirt" no campo de busca
    cy.get('button[type="submit"]').click(); 
    cy.contains('Products').should('be.visible'); 
    cy.contains('Tshirt').should('be.visible'); // Confirma que os resultados incluem "Tshirt"
  });

  // Tentativa de login com credenciais incorretas
  it('Cenário 2: Tentativa de login com credenciais fictícias', () => {
    cy.contains('Signup / Login').click(); // Acessa a página de login
    cy.get('input[data-qa="login-email"]').type('emailfalso@teste.com'); // Insere um email falso
    cy.get('input[data-qa="login-password"]').type('senha123'); 
    cy.get('button[data-qa="login-button"]').click(); 
    cy.contains('Your email or password is incorrect!').should('be.visible'); // Verifica a mensagem de erro
  });

  // Adiciona um item ao carrinho e inicia o processo de checkout
  it('Cenário 3: Adicionar um item ao carrinho e iniciar o checkout', () => {
    cy.contains('Tshirts').click(); 
    cy.get('.product-overlay').first().click();
    cy.contains('Add to cart').click(); // Adiciona o produto ao carrinho
    cy.contains('View Cart').click(); 
    cy.contains('Proceed To Checkout').click(); 
    cy.contains('Address Details').should('be.visible'); // Confirma que os detalhes do endereço aparecem
  });

});
