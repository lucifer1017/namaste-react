import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from '../RestaurantMenu';
import { act } from "react";
import MOCK_DATA from '../mocks/resMenuMock.json';
import { Provider } from "react-redux";
import appStore from '../../utils/appStore'
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should check the flow for adding items to the Cart", async () => {

    await act(async () => render(

        <Provider store={appStore}>
            <RestaurantMenu />
        </Provider>

    ))
    const accHeader = screen.getByText(/Recommended/);

    fireEvent.click(accHeader);
})
