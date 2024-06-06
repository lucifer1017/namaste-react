import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    if (resInfo == null) {
        return <Shimmer />
    }
    // console.log(resInfo)
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