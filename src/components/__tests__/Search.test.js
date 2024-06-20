import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from '../mocks/resListMock.json'
import { BrowserRouter } from "react-router-dom"
import { act } from "react"
import '@testing-library/jest-dom'


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should render Body component with search btn", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>

    ));

    const searchBtn = screen.getByRole('button', { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "pizza" } });
    fireEvent.click(searchBtn);
    const cards = screen.getAllByTestId("rescard");
    expect(cards.length).toBe(3);


})

it("should filter resList on clicking Top rated restaurants btn", async () => {
    await act(async () => render(

        <BrowserRouter>
            <Body />
        </BrowserRouter>

    ))
    const cardsBefore = screen.getAllByTestId("rescard");
    expect(cardsBefore.length).toBe(20);
    const topRatedSearchBtn = screen.getByRole('button', { name: "Top Rated Restaurants" });

    fireEvent.click(topRatedSearchBtn);
    const cardsList = screen.getAllByTestId("rescard");


    expect(cardsList.length).toBe(16);


})