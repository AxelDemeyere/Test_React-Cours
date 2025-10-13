import {describe, it, expect} from "vitest";
import {filtrerPairs} from "./filtrerPairs.tsx";

describe("filtrerPairs" , () => {
    it('Dois retourner une erreur si ce n\'est pas un tableau de nombre', () => {
        expect(() => {filtrerPairs(null as unknown as number[])}).toThrow("Vous devez fournir un tableau de nombres");
    });

    it('Dois retourner un tableau vide si le tableau est vide', () => {
        expect(filtrerPairs([])).toEqual([]);
    });

    it('Dois retourner un tableau avec les nombres pairs uniquement', () => {
        expect(filtrerPairs([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });

    it('Dois retourner un tableau vide si il n\'y a pas de nombre pair', () => {
        expect(filtrerPairs([1, 3, 5])).toEqual([]);
    });
});