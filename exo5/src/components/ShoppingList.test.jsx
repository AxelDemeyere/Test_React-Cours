import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CartProvider } from '../context/CartContext'
import { ShoppingList } from './ShoppingList'

function renderWithProvider(component) {
  return render(<CartProvider>{component}</CartProvider>)
}

describe("ShoppingList (integration parent/enfant + contexte)", () => {
  test('état initial et accessibilité', () => {
    renderWithProvider(<ShoppingList />)
    expect(screen.getByText(/Total : 0/)).toBeInTheDocument()
    expect(screen.getByText(/Aucun article/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Ajouter/ })).toBeDisabled()
  })

  test("ajout d'un article met a jour la liste et le total", async () => {
    renderWithProvider(<ShoppingList />)
    const input = screen.getByPlaceholderText(/Nouvel article/)
    const button = screen.getByRole('button', { name: /Ajouter/ })
    await userEvent.type(input, 'Lait')
    expect(button).not.toBeDisabled()
    await userEvent.click(button)
    expect(input).toHaveValue('')
    expect(screen.getByText('Lait')).toBeInTheDocument()
    expect(screen.getByText(/Total : 1/)).toBeInTheDocument()
  })

  test("ajouts multiples et toggle achete", async () => {
    renderWithProvider(<ShoppingList />)
    const input = screen.getByPlaceholderText(/Nouvel article/)
    const button = screen.getByRole('button', { name: /Ajouter/ })
    await userEvent.type(input, 'Lait')
    await userEvent.click(button)
    await userEvent.type(input, 'Pain')
    await userEvent.click(button)
    expect(screen.getByText('Lait')).toBeInTheDocument()
    expect(screen.getByText('Pain')).toBeInTheDocument()
    expect(screen.getByText(/Total : 2/)).toBeInTheDocument()
    // Toggle "acheté" sur le premier item
    const checkboxes = screen.getAllByRole('checkbox')
    await userEvent.click(checkboxes[0])
    expect(screen.getByText(/Lait \[acheté]/)).toBeInTheDocument()
  })

  test("suppression d'un article", async () => {
    renderWithProvider(<ShoppingList />)
    const input = screen.getByPlaceholderText(/Nouvel article/)
    const button = screen.getByRole('button', { name: /Ajouter/ })
    await userEvent.type(input, 'Lait')
    await userEvent.click(button)
    await userEvent.type(input, 'Pain')
    await userEvent.click(button)
    // Suppression du premier item
    const deleteButtons = screen.getAllByRole('button', { name: /Supprimer/ })
    await userEvent.click(deleteButtons[0])
    expect(screen.queryByText('Lait')).not.toBeInTheDocument()
    expect(screen.getByText('Pain')).toBeInTheDocument()
    expect(screen.getByText(/Total : 1/)).toBeInTheDocument()
  })
})