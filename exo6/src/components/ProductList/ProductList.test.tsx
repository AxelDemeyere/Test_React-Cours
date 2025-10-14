import { describe, test, expect } from "vitest";
import { render, screen, waitFor } from '@testing-library/react';
import { server } from '../../../test/msw/server';
import { http, HttpResponse } from 'msw';
import { ProductList } from './ProductList';

describe('ProductList Component', () => {
    test('should display loading then success with product list', async () => {
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

    test('should display error message when server returns 500', async () => {
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

    test('should display "Aucun produit" when server returns empty array', async () => {
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