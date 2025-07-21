import { fireEvent, render , screen } from "@testing-library/react";
import { act } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import mockData from "../mocks/mockResList.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = (() => 
    Promise.resolve ({
      json: () => Promise.resolve(mockData)
    })
)


it("Should render the menu component", async () => {
    await act(async () => render(
    <BrowserRouter>
    <Provider store={appStore}>
    <RestaurantMenu/>
    </Provider>
    </BrowserRouter>
));

const accordianHeader = screen.getByText("Flash Sale Pizzas (2)");
fireEvent.click(accordianHeader);

//expect(screen.getAllByTestId("foodItems").length).toBe(2);


})

it("Should render the recommened menu component", async () => {
    await act(async () => render(
    <BrowserRouter>
    <Provider store={appStore}>
    <RestaurantMenu/>
    </Provider>
    </BrowserRouter>
));

const accordianHeader = screen.getByText("Recommended (20)");
fireEvent.click(accordianHeader);

expect(screen.getAllByTestId("foodItems").length).toBe(20);


})