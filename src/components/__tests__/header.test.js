import Header from "../Header";
import "@testing-library/jest-dom";
import { fireEvent, render , screen} from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";

test("Should load header component with login button",
    () => {
        render(
            <BrowserRouter>
              <Provider store = {appStore}>
               <Header/>
              </Provider>
            </BrowserRouter>
        )

       const loginbutton = screen.getByRole("button")        //one way
       //const loginbutton = screen.getByText("Login")       //another way

        expect (loginbutton).toBeInTheDocument();
    }
)

test("Should load header component with Cart item",
    () => {
        render(
            <BrowserRouter>
              <Provider store = {appStore}>
               <Header/>
              </Provider>
            </BrowserRouter>
        )

       const loginbutton = screen.getByText(/Cart/)        // it only check that if there is any text named cart items

        expect (loginbutton).toBeInTheDocument();
    }
)

it("Should Chnage login button to logout on click",
    () => {
        render(
            <BrowserRouter>
              <Provider store = {appStore}>
               <Header/>
              </Provider>
            </BrowserRouter>
        )

       const loginbutton = screen.getByRole("button", {name : "Login"})   ;
       
       fireEvent.click(loginbutton)

       const logoutbutton = screen.getByRole("button",{name : "Logout"})

        expect (logoutbutton).toBeInTheDocument();
    }
)