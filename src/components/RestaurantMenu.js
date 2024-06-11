import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
    const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(null);
    const resInfo = useRestaurantMenu(resId);
    if (resInfo == null) {
        return <Shimmer />
    }
    //  console.log(resInfo)
    const { name, cuisines, avgRating, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;
    // const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log("resmenu line 13", resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cat) => {
        return cat?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    });
    // console.log(categories);


    return (
        <div className="text-center">
            <h1 className="font-bold  text-2xl my-6">{name}</h1>

            <h4 className="font-bold  text-lg">{cuisines.join(", ")}</h4>
            {/* <p >Avg. Rating : {avgRating}</p>
            <p>{costForTwoMessage}</p> */}
            {categories.map((category, index) => {
                // console.log(" index:", index)
                return <RestaurantCategory key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => {
                        if (showIndex !== index)
                            setShowIndex(index)
                        else
                            setShowIndex(null);
                    }}
                />
            })}


        </div>
    )
}
/**
 * data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => {
                        return setShowIndex(index);
                    }
 */
export default RestaurantMenu;