import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { INDRES_API } from "../utils/constants";
const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    useEffect(() => {
        fetchMenu();
    }, []);


    const fetchMenu = async () => {
        const menuData = await fetch(INDRES_API + resId);
        const response = await menuData.json();

        setResInfo(response);


    }
    if (resInfo == null) {
        return <Shimmer />
    }
    console.log(resInfo)
    const { name, cuisines, avgRating, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


    return (
        <div className="res-menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <b><p>Avg. Rating : {avgRating}</p></b>
            <b><p>{costForTwoMessage}</p></b>

            <ul>

                {itemCards?.map((res) => {
                    return <li key={res?.card?.info?.id}>{res?.card?.info?.name}-{" Rs."}
                        {res?.card?.info?.price / 100 || res?.card?.info?.defaultPrice / 100}</li>
                })}


            </ul>
        </div>
    )
}

export default RestaurantMenu;