import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory =({data,showItems,setShowIndex}) => {

const handleClick=() => {
  setShowIndex();
 };

    
    //console.log(data);
    return (
        <div>
            {/*header*/}
            <div className="w-6/12 mx-auto p-4 bg-gray-50 shadow-lg my-6">
              <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-m">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
              </div>
               {showItems && <ItemList items={data.itemCards} showAddButton={true}/>}
            </div>
            {/*body*/}
        </div>
    );
};

export default RestaurantCategory;