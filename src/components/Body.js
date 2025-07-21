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
            <div className="filter flex">
                <div className="search m-4 p-4 ">
                    <input type="text" data-testid="searchInput" className="search-box border border-solid border-black" value={searchText}
                      onChange={(e) => {
                        setSearchText(e.target.value);
                      }}
                    />
                    <button className="py-2 px-4 mx-4 bg-purple-400 rounded-lg" 
                    onClick={() => {
                        console.log(searchText);

                       const filteredRestaurants=listOfRestaurants.filter(
                        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())  
                        ) ;

                        setFilteredrestaurants(filteredRestaurants);

                    }}
                    >Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                <button className="filter-btn py-2 px-4 bg-purple-400 rounded-lg"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                    setFilteredrestaurants(filteredList);
                }}
             >Top-Rated Restaurants</button>
             </div>
            </div>
             <div className="res-container flex flex-wrap">
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