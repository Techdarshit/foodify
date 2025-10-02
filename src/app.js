import React from "react"; 
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";


const  Applayout = () => {
      return (
        <Provider store={appStore}>
            <div className="flex flex-col min-h-screen">
                <Header/>
                <div className="flex-grow">
                    <Outlet/>
                </div>
                <Footer/>  {/* ✅ Footer added here */}
            </div>
        </Provider>
    );
};


const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <Applayout/>,
        children:[ 
        {
            path:"/",
            element: <Body/>,
        },
        {
            path:"/about",
            element: <About/>,
        },
        {
            path:"/contact",
            element: <Contact/>,
        },
        {
            path:"/restaurants/:resId",
            element: <RestaurantMenu/>,
        },
        {
            path:"/cart",
            element:<Cart/>,
        }
    ],
        errorElement: <Error/>,
    },
   
]);




const root=ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter}/>);
