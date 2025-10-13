import {describe, it, expect} from "vitest";
import {capitalize} from "./capitalize.tsx";

describe("capitalize", () => {
    it('Retourne une erreur si aucun mot n\'est fournit', () => {
        expect(() => {capitalize("")}).toThrow("Vous devez fournir un mot");
    });

    it('Retourne une erreur si autre chose qu\'un mot est fournit', () => {
        const invalidInputs = [123, null, undefined, {}, [], true, false];
        invalidInputs.forEach(input => {
            expect(() => {capitalize(input as unknown as string)}).toThrow("Vous devez fournir un mot");
    });

    });

    it('Met en majuscule la première lettre d\'un mot en minuscule', () => {
        expect(capitalize("hello")).toBe("Hello");
    });

    it('Met en majuscule la première lettre d\'un mot en majuscule', () => {
        expect(capitalize("Hello")).toBe("Hello");
    });

});