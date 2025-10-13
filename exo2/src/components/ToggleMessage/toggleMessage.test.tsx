import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import {ToggleMessage} from "./toggleMessage.tsx";
import {userEvent} from "@testing-library/user-event";

describe("ToggleMessage", () => {
    it("Le message est caché par défaut", () => {
        render(<ToggleMessage />);
        expect(screen.queryByRole("paragraph")).toBeNull();
    });
    it("Le message s'affiche après un clic", async () => {
        render(<ToggleMessage />);
        const user = userEvent.setup();
        const button = screen.getByRole("button");
        await user.click(button);
        expect(screen.getByText("Hello World!")).toBeInTheDocument();

    });
    it("Le message se cache après un deuxième clic", async () => {
        render(<ToggleMessage />);
        const user = userEvent.setup();
        const button = screen.getByRole("button");
        await user.click(button);
        await user.click(button);
        expect(screen.queryByText("Hello World!")).toBeNull();
    });
})