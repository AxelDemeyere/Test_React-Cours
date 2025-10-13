import {describe, expect, it} from "vitest";
import {isValidEmail} from "./isValidEmail.tsx";

describe("isValidEmail" , () => {
    it('Doit retourner une erreur si l\'email n\'est pas valide', () => {
        expect(() => {isValidEmail("invalid-email")}).toThrow("L'email n'est pas valide");
    })

    it('Doit retourner true si l\'email est valide', () => {
        expect(isValidEmail("axel@test.fr")).toBe(true);
    })
});