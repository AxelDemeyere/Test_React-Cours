import {describe, expect, vi, it} from "vitest";
import { render , screen} from "@testing-library/react";
import {SearchBar} from "./SearchBar.tsx";
import userEvent from '@testing-library/user-event'

const handleSearch = vi.fn();


describe("SearchBar", () => {
    beforeEach(() => {
        handleSearch.mockClear();
    });
    it('devrait saisir une requête et soumettre le bouton la requête trimée', async () => {
        render(<SearchBar onSearch={handleSearch}/>);
        const searchInput = screen.getByPlaceholderText("Rechercher...");
        const searchButton = screen.getByRole("button", { name: "Rechercher" });

        await userEvent.type(searchInput, "  Salut Christophe ");
        await userEvent.click(searchButton);

        expect(handleSearch).toHaveBeenCalledWith("Salut Christophe");

    });

    it('devrait saisir une requête et soumettre avec "entrer" la requête trimée', async () => {
        beforeEach(() => {
            handleSearch.mockClear();
        });
        render(<SearchBar onSearch={handleSearch}/>);
        const searchInput = screen.getByPlaceholderText("Rechercher...");

        await userEvent.type(searchInput, "  Re Christophe {Enter}");
        expect(handleSearch).toHaveBeenCalledWith("Re Christophe");
    });

    it('devrait avoir le bouton "Rechercher" désactivé', async () => {
        beforeEach(() => {
            handleSearch.mockClear();
        });
        render(<SearchBar onSearch={handleSearch}/>);
        const searchInput = screen.getByPlaceholderText("Rechercher...");

        expect(screen.getByRole("button", { name: "Rechercher" })).toBeDisabled();

        await userEvent.type(searchInput, "  ");
        expect(screen.getByRole("button", { name: "Rechercher" })).toBeDisabled();

        await userEvent.type(searchInput, "  a ");
        expect(screen.getByRole("button", { name: "Rechercher" })).toBeEnabled();
    });

    it('devrait ne faire aucune recherche si la requête est vide', async () => {
        beforeEach(() => {
            handleSearch.mockClear();
        });
        render(<SearchBar onSearch={handleSearch}/>);
        const searchInput = screen.getByPlaceholderText("Rechercher...");
        const searchButton = screen.getByRole("button", { name: "Rechercher" });

        await userEvent.click(searchButton);
        expect(handleSearch).not.toHaveBeenCalled();

        await userEvent.type(searchInput, "   ");
        await userEvent.click(searchButton);
        expect(handleSearch).not.toHaveBeenCalled();
    });

    it('devrait permettre la navigation au clavier avec Tab', async () => {
        beforeEach(() => {
            handleSearch.mockClear();
        });
        render(<SearchBar onSearch={handleSearch}/>);
        const searchInput = screen.getByPlaceholderText("Rechercher...");
        const searchButton = screen.getByRole("button", { name: "Rechercher" });

        await userEvent.type(searchInput, "C'est encore moi");

        searchInput.focus();
        expect(document.activeElement).toBe(searchInput);

        await userEvent.tab();
        expect(searchButton).toHaveFocus();
    });
});