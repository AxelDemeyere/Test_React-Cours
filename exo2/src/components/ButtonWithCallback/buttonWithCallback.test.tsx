import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { ButtonWithCallback } from "./buttonWithCallBack.tsx";

describe("ButtonWithCallback", () => {
    it("devrait appeler la fonction onClick quand on clique sur le bouton", async () => {
        const mockOnClick = vi.fn();
        const user = userEvent.setup();

        render(<ButtonWithCallback onClick={mockOnClick} />);

        const button = screen.getByRole("button", { name: "Cliquez-moi" });
        await user.click(button);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it("devrait appeler la fonction onClick plusieurs fois lors de clics multiples", async () => {
        const mockOnClick = vi.fn();
        const user = userEvent.setup();

        render(<ButtonWithCallback onClick={mockOnClick} />);

        const button = screen.getByRole("button");
        await user.click(button);
        await user.click(button);
        await user.click(button);

        expect(mockOnClick).toHaveBeenCalledTimes(3);
    });

    it("devrait rendre le bouton correctement", () => {
        const mockOnClick = vi.fn();

        render(<ButtonWithCallback onClick={mockOnClick} />);

        expect(screen.getByRole("button", { name: "Cliquez-moi" })).toBeInTheDocument();
    });
});
