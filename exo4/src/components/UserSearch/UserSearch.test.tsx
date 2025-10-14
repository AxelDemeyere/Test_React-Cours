import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { http, HttpResponse } from 'msw'
import { server } from '../../../test/msw/server'
import { UserSearch } from './UserSearch'

describe('UserSearch Component', () => {
  it('doit afficher le formulaire de recherche au départ', () => {
    render(<UserSearch />)

    const input = screen.getByLabelText('Nom d\'utilisateur')
    expect(input).toBeInTheDocument()

    const button = screen.getByText('Rechercher')
    expect(button).toBeInTheDocument()
    expect(screen.queryByText('Chargement...')).not.toBeInTheDocument()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()

    expect(screen.queryByText(/utilisateur trouvé/i)).not.toBeInTheDocument()
  })

  it('doit afficher "Chargement..." pendant la requête', async () => {
    server.use(
        http.get('https://api.example.com/user/alice', async () => {
          await new Promise(resolve => setTimeout(resolve, 100))
          return HttpResponse.json({ name: 'Alice' })
        })
    )

    const user = userEvent.setup()
    render(<UserSearch />)

    const input = screen.getByLabelText('Nom d\'utilisateur')
    await user.type(input, 'alice')

    const button = screen.getByText('Rechercher')
    await user.click(button)

    expect(screen.getByText('Chargement...')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.queryByText('Chargement...')).not.toBeInTheDocument()
    })
  })

  it('doit afficher le nom de l\'utilisateur quand la recherche réussit', async () => {
    const user = userEvent.setup()
    render(<UserSearch />)

    const input = screen.getByLabelText('Nom d\'utilisateur')
    await user.type(input, 'alice')

    const button = screen.getByText('Rechercher')
    await user.click(button)

    await waitFor(() => {
      expect(screen.getByText('Utilisateur trouvé : Alice')).toBeInTheDocument()
    })
  })

  it('doit afficher une erreur quand la recherche échoue', async () => {
    server.use(
        http.get('https://api.example.com/user/utilisateur_inexistant', () => {
          return new HttpResponse(null, { status: 404 })
        })
    )

    const user = userEvent.setup()
    render(<UserSearch />)

    const input = screen.getByLabelText('Nom d\'utilisateur')
    await user.type(input, 'utilisateur_inexistant')

    const button = screen.getByText('Rechercher')
    await user.click(button)

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent('Utilisateur introuvable')
    })
  })
})
