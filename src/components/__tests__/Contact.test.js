import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";
test('Should render the Contact Page', () => {
    render(<Contact />)

    //This is known as Querying
    const button = screen.getByText("Submit")

    expect(button).toBeInTheDocument();

})
test('Should load input name In contact page', () => {

    render(<Contact />);
    const inputName = screen.getByPlaceholderText("Name..");

    //Assertion
    expect(inputName).toBeInTheDocument();
})

