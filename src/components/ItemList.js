
import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {


    return (
        <div>
            {items.map((item, index) => {
                return (
                    <div key={item?.card?.info?.id}
                        className="my-2 p-2 border-gray-200 border-b-2  text-left">
                        {/**Name and pricing */}
                        <div className=" flex justify-between">
                            <div className="py-2 w-9/12" >

                                <span className="font-bold py-1">{item?.card?.info?.name}</span>
                                <span className="font-bold flex">₹ {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</span>
                                <p className="text-sm py-1">{item?.card?.info?.description}</p>

                            </div>
                            <div className="w-3/12 p-4 relative ">
                                <button className="absolute bg-white text-green-500 rounded-lg px-6 py-1 items-center bottom-2 ">Add</button>
                                <img className="w-9/12 rounded-lg " src={CDN_URL + item?.card?.info?.imageId} alt="img" />
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}


export default ItemList;