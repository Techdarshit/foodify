import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import {showAddButton} from "./ItemList";
const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items );

    const dispatch = useDispatch();
    const handleClearCart =() =>
    {
        dispatch(clearCart());
    }


   return (
  <div className="text-center m-4 p-4">
    <h1 className="text-3xl font-bold">Cart</h1>
    <div className="w-6/12 m-auto">
      {cartItems.length > 0 && (
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      )}
      {cartItems.length === 0 && (
        <h1 className="mt-3 text-purple-500 text-lg">Your cart is empty...Add your favourite items now!</h1>
      )}
      <ItemList items={cartItems} showAddButton={false} />
    </div>
  </div>
);

} 

export default Cart;