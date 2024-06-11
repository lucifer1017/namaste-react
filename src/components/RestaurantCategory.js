import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    // console.log(props);
    /***
     * , showItems, setShowIndex
     * 
     */
    // console.log(data);


    const handleClick = () => {

        setShowIndex();
    }

    const { title, itemCards } = data;
    return (
        <div>

            <div className="w-6/12 mx-auto my-4 p-4 shadow-xl bg-gray-50 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{title + " (" + itemCards.length + ")"}</span>
                    <span>{showItems ? "⬆️" : "⬇️"}</span>
                </div>

                {showItems && <ItemList items={itemCards} />}
            </div>

        </div>
    )
}


export default RestaurantCategory;