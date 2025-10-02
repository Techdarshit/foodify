import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header=() => {
  const [btnName,setBtnName] = useState("Login");
//console.log("header Render");

//Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  const onlineStatus = useOnlineStatus();
  return (
        <div className="flex justify-between bg-fuchsia-100 shadow-lg">
           <div className="logo-container">
             <img className="w-48"
              src={LOGO_URL}>
             </img>
           </div>
           <div className="flex items-center">
              <ul className="flex p-4 m-4">
                 <li className="px-4 font-bold  transform transition duration-300 hover:scale-105">
                   Online Status : {onlineStatus ? "🟢" : "🔴"}
                 </li>
                 <li className="px-4 font-bold  transform transition duration-300 hover:scale-105">
                  <Link to="/">Home</Link>  
                 </li>
                 <li className="px-4 font-bold transform transition duration-300 hover:scale-105">
                  <Link to="/about">About Us</Link>
                 </li>
                 <li className="px-4 font-bold transform transition duration-300 hover:scale-105">
                  <Link to="/contact">Contact Us</Link>
                 </li>
                 <li className="px-4 font-bold  transform transition duration-300 hover:scale-105">
                  <Link to="/cart">Cart-({cartItems.length} items)</Link> 
                 </li>  
                 <button className="px-4 font-bold"
                   onClick={() =>
                     {btnName === "Login" ? setBtnName("Logout")
                     : setBtnName("Login")
                     }}
                 >{btnName}</button>             
             </ul>
           </div>
        </div>
    );
}

export default Header;