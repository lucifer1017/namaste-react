import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cloudinaryImageId, cuisines, avgRating, sla, costForTwo } = resData?.info;
    // console.log(resData);
    return (
        <div className="res-card" >
            <h3>{name}</h3>
            <img src={CDN_URL + cloudinaryImageId} alt="res-logo" className="res-logo" />
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} Stars</h5>
            <h5>{sla.deliveryTime} Mins</h5>
            <h5>{costForTwo}</h5>
        </div>
    )
};

export default RestaurantCard;