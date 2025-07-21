import Contact from "../Contact";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Conatact page should be loaded", () => {
    render(<Contact/>)

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})