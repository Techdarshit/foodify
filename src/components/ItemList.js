import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items, showAddButton }) => {  // ✅ add showAddButton here
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4 relative">
            {showAddButton && (  // ✅ only render button if showAddButton is true
              <div className="absolute">
                <button
                  className="p-2 mx-12 bg-black text-white rounded-lg shadow-lg bottom-px 
                             transform transition duration-200 ease-in-out 
                             active:scale-90 cursor-pointer"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
            )}
            <img src={CDN_URL + item.card.info.imageId} alt="food" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
