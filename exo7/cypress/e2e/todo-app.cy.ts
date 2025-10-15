describe('Todo App - Tests E2E', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5179/')
  })

  it('1. Affiche "Aucune tâche" au départ', () => {
    cy.get('[data-cy="no-todos"]').should('be.visible')
    cy.get('[data-cy="no-todos"]').should('contain.text', 'Aucune tâche')
  })

  it('2. Permet d\'ajouter une tâche et l\'affiche dans la liste', () => {
    cy.get('[data-cy="todo-input"]').type('Acheter du pain')

    cy.get('[data-cy="add-button"]').click()

    cy.get('[data-cy="todo-item"]').should('have.length', 1)
    cy.get('[data-cy="todo-item"]').first().should('contain.text', 'Acheter du pain')

    cy.get('[data-cy="no-todos"]').should('not.exist')

    cy.get('[data-cy="todo-input"]').should('have.value', '')
  })

  it('3. Permet de supprimer une tâche et affiche "Aucune tâche"', () => {
    cy.get('[data-cy="todo-input"]').type('Acheter du pain')
    cy.get('[data-cy="add-button"]').click()

    cy.get('[data-cy="todo-item"]').should('have.length', 1)

    cy.get('[data-cy="delete-button"]').click()

    cy.get('[data-cy="todo-item"]').should('not.exist')

    cy.get('[data-cy="no-todos"]').should('be.visible')
    cy.get('[data-cy="no-todos"]').should('contain.text', 'Aucune tâche')
  })

  it('Test bonus : Permet d\'ajouter plusieurs tâches', () => {
    cy.get('[data-cy="todo-input"]').type('Acheter du pain')
    cy.get('[data-cy="add-button"]').click()

    cy.get('[data-cy="todo-input"]').type('Faire les courses')
    cy.get('[data-cy="add-button"]').click()

    cy.get('[data-cy="todo-input"]').type('Appeler le dentiste')
    cy.get('[data-cy="add-button"]').click()

    cy.get('[data-cy="todo-item"]').should('have.length', 3)

    cy.get('[data-cy="delete-button"]').eq(1).click()

    cy.get('[data-cy="todo-item"]').should('have.length', 2)
  })

  it('Test bonus : N\'ajoute pas de tâche vide', () => {
    cy.get('[data-cy="add-button"]').click()

    cy.get('[data-cy="no-todos"]').should('be.visible')

    cy.get('[data-cy="todo-input"]').type('   ')
    cy.get('[data-cy="add-button"]').click()

    cy.get('[data-cy="no-todos"]').should('be.visible')
  })
})
