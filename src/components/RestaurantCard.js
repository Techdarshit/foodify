import { CDN_URL } from "../utils/constants";


const RestaurantCard= (props) => {
    
    const {resData} =props;
    //console.log(resData);
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,locality}=resData?.info;
    
    return (
      <div 
          data-testid="resCard"
         className="res-card m-7 p-7 w-[300] bg-gray-100 rounded-lg hover:bg-gray-300">
        <img className="res-logo rounded-lg" alt="res-logo"
         src={ CDN_URL+ cloudinaryImageId}
         />
         <h3 className="font-bold py-4 text-lg">{name}</h3>
         <h4>{cuisines.join(", ")}</h4>
         <h4>{avgRating} stars</h4>
         <h4>{costForTwo}</h4>
         <h4>{locality}</h4>   
      </div>
     );
};



export default RestaurantCard;