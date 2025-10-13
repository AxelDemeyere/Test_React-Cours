import {describe, it, expect} from "vitest";
import {moyenne} from "./moyenne.tsx";

describe("moyenne", () => {

    it("Retourne une erreur si pas de notes", () => {
        expect(() => {moyenne([])}).toThrow("La liste des notes ne peut pas être vide");
    });

    it("Calcule la moyenne de notes positives", () => {
        expect(moyenne([10, 20, 30])).toBe(20);
    });

    it("Calcule la moyenne de notes négatives", () => {
        expect(moyenne([-10, -20, -30])).toBe(-20);
    });

    it("Calcule la moyenne de notes mixtes", () => {
        expect(moyenne([-10, 0, 10])).toBe(0);
    });

    it("Calcule la moyenne avec une seule note", () => {
        expect(moyenne([42])).toBe(42);
    });

    it("Calcule la moyenne avec des décimales", () => {
        expect(moyenne([1.5, 2.5, 3.5])).toBeCloseTo(2.5);
    });
});