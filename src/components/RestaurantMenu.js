
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // keep all accordions closed initially
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  // Extract basic restaurant details
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.find((card) => card?.card?.card?.info)?.card?.card?.info || {};

  // Find the REGULAR menu card dynamically
  const menuCards = resInfo?.cards?.find(
    (card) => card?.groupedCard?.cardGroupMap?.REGULAR
  );

  // Extract itemCards dynamically
  const itemCards =
    menuCards?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
      (c) => c?.card?.card?.itemCards
    )?.card?.card?.itemCards || [];

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h2 className="font-bold my-6 text-2xl">{name}</h2>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() =>
            setShowIndex(index === showIndex ? null : index) // toggle open/close
          }
        />
      ))}
    </div>
  );
};


export default RestaurantMenu;