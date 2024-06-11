import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cloudinaryImageId, cuisines, avgRating, sla, costForTwo } = resData?.info;
    // console.log(resData);
    return (
        <div className="p-2 m-3 w-[250px] rounded-lg bg-gray-50 transition-all duration-300 ease-in-out hover:transform hover:scale-110 hover:bg-gray-300 " >

            <img src={CDN_URL + cloudinaryImageId} alt="res-logo" className="rounded-lg" />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} Stars</h5>
            <h5>{sla.deliveryTime} Mins</h5>
            <h5>{costForTwo}</h5>
        </div>
    )
};

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }

}


export default RestaurantCard;