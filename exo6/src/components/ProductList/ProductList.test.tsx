import { describe, test, expect } from "vitest";
import { render, screen, waitFor } from '@testing-library/react';
import { server } from '../../../test/msw/server';
import { http, HttpResponse } from 'msw';
import { ProductList } from './ProductList';

describe('ProductList Component', () => {
    test('devrait afficher le chargement puis le succès avec la liste des produits', async () => {
        render(<ProductList />);
        expect(screen.getByText('Chargement...')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByText('Clavier')).toBeInTheDocument();
            expect(screen.getByText('Souris')).toBeInTheDocument();
        });

        const list = screen.getByRole('list');
        expect(list).toBeInTheDocument();
        expect(screen.queryByText('Chargement...')).not.toBeInTheDocument();
    });

    test('devrait afficher un message d\'erreur quand le serveur retourne 500', async () => {
        server.use(
            http.get('https://api.example.com/products', () => {
                return new HttpResponse(null, { status: 500 });
            })
        );

        render(<ProductList />);
        expect(screen.getByText('Chargement...')).toBeInTheDocument();
        await waitFor(() => {
            const errorMessage = screen.getByRole('alert');
            expect(errorMessage).toHaveTextContent('Impossible de charger');
        });

        expect(screen.queryByText('Chargement...')).not.toBeInTheDocument();
    });

    test('devrait afficher "Aucun produit" quand le serveur retourne un tableau vide', async () => {
        server.use(
            http.get('https://api.example.com/products', () => {
                return HttpResponse.json([]);
            })
        );

        render(<ProductList />);
        expect(screen.getByText('Chargement...')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByText('Aucun produit')).toBeInTheDocument();
        });

        expect(screen.queryByText('Chargement...')).not.toBeInTheDocument();
        expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });
});