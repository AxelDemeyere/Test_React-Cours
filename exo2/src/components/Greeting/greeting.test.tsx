import {describe, expect, it} from "vitest";
import {render} from "@testing-library/react";
import { Greeting } from "./greeting.tsx";
import {screen} from "@testing-library/react";


describe("Greeting", () => {
    it("Utilise la valeur de défaut de la props 'name'", () => {
        render(<Greeting />);
        expect(screen.getByText("Bonjour, invité!")).toBeInTheDocument();
    });

    it("Utilise la valeur passée dans la props 'name'", () => {
        render(<Greeting name="React" />);
        expect(screen.getByText("Bonjour, React!")).toBeInTheDocument();
    });
});