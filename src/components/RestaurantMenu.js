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
        <div className="p-4 m-4 border border-solid border-black w-[300px]">
            <h1 className="font-bold underline  items-center">{name}</h1>
            <div className="p-2 m-2 border border-solid border-black">
                <h4>{cuisines.join(", ")}</h4>
                <p >Avg. Rating : {avgRating}</p>
                <p>{costForTwoMessage}</p>
            </div>


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