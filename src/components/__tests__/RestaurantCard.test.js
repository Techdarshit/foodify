import RestaurantCard from "../RestaurantCard";
import { render , screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";





it("Should render restaurant card with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name=screen.getByText("KFC");

    expect(name).toBeInTheDocument();


})