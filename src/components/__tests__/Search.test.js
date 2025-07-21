import { fireEvent, render , screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResfetchdata.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "@testing-library/react";


global.fetch = jest.fn( ()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})



it("Should render search component with burger search input", async() => {
    await act(async () =>
    render(
        <BrowserRouter>
          <Body/>
        </BrowserRouter>
    )
);

const cardsBeforeSearch= screen.getAllByTestId("resCard");
expect(cardsBeforeSearch.length).toBe(8);

const searchBtn = screen.getByRole("button", {name : "Search"});

const searchInput = screen.getByTestId("searchInput");
fireEvent.change(searchInput,{target:{value:"Burger"}});
fireEvent.click(searchBtn);

const cardsAfterSearch = screen.getAllByTestId("resCard");
expect(cardsAfterSearch.length).toBe(1);

})

//it("Should render top-rated restuarants cards", async() => {
   // await act(async () =>
  //  render(
       // <BrowserRouter>
      //    <Body/>
// </BrowserRouter>
  //  )
//); 
//const cardsBeforeclick = screen.getAllByTestId("resCard");
//expect(cardsBeforeclick.length).toBe(8);

//const topRatedBtn = screen.getByRole("button" , {name: "Top-Rated Restaurants",});
//fireEvent.click(topRatedBtn);

//const cardsAfterclick = screen.getAllByTestId("resCard");
//expect(cardsAfterclick.length).toBe(1);


//})