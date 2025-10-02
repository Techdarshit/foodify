import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body=() => {

    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurants,setFilteredrestaurants] = useState([]);

    const [searchText,setSearchText] = useState("");

   
    
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData= async () => {
        const data = await fetch (
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json =await data.json();
        console.log(json);
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredrestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
    };

    const onlineStatus=useOnlineStatus();

    if( onlineStatus === false)
        return (
          <h1>You are Offline,Please Check your internet connection!!</h1>
        )

    return listOfRestaurants.length === 0 ? ( <Shimmer/> ) : (
        <div className="body">
            <div className="w-full flex items-center justify-center gap-2 px-8 my-6">
               {/* Search Input */}
                <input
                type="text"
                data-testid="searchInput"
                className="w-2/5 min-w-[250px] border border-purple-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={searchText}
                placeholder="Search restaurants..."
                onChange={(e) => setSearchText(e.target.value)}
                />
                {/* Search Button */}
                <button
                    className="px-6 py-2 bg-purple-400 hover:bg-purple-500 text-white font-medium rounded-lg transition"
                    onClick={() => {
                    const filteredRestaurants = listOfRestaurants.filter((res) =>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredrestaurants(filteredRestaurants);
                    }}
                >
                    Search
                </button>
                {/* Top Rated Button */}
                  <button
                    className="px-7 py-2 bg-purple-400 hover:bg-purple-500 text-white font-medium rounded-lg transition"
                    onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                    setFilteredrestaurants(filteredList);
                    }}>
                    Top-Rated Restaurants
                  </button>
                </div>
             <div className="res-container flex flex-wrap justify-center">
                {filteredRestaurants.map((restaurant) => (
                   <Link className="card"
                    key={restaurant.info.id}
                    to={"/restaurants/" + restaurant.info.id}
                   >
                    <RestaurantCard resData={restaurant}/> 
                    </Link>
                ))}
             </div>
        </div>
    );
}

export default Body;