import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";


test("Should load coontact us component", () => {
    render(<ContactUs/>);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test("Should load Button inside Contact component", () => {
    render(<ContactUs/>);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
});

test("Should load input name inside Contact component", () => {
    render(<ContactUs/>);

    const inputname = screen.getByPlaceholderText("Name");

    expect(inputname).toBeInTheDocument();
});

test("Should load two input boxes on the Contact component", () => {
    render(<ContactUs/>);

    const inputBoxes = screen.getAllByRole("textbox");

    
    console.log(inputBoxes.length);

    expect(inputBoxes.length).toBe(2);
});