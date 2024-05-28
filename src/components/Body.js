import RestaurantCard from "./RestaurantCard"
import resObj from "../utils/mockData";
import { useState } from "react";
import SearchBar from "./SearchBar";

const Body = () => {
    const [resList, setResList] = useState(resObj);
    // const filterData = (query, dataList) => {
    //     if (!query)
    //         return dataList;
    //     return dataList.filter((res) => {
    //         return res.info.cuisines.some((curr) => curr.toLowerCase().includes(query.toLowerCase()));
    //     })
    // }
    // const handleSearch = (query) => {
    //     if (!query) {
    //         setResList(resObj);
    //         return;
    //     }

    //     const filteredList = filterData(query, resList);
    //     setResList(filteredList);

    // }
    return (
        <div className="body">
            {/* <div className="search-container"><SearchBar onSearch={handleSearch} /></div> */}

            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = resList.filter((res) => {
                            console.log(res.info.avgRating + " hi ");
                            return res.info.avgRating > 4;
                        })

                        setResList(filteredList);
                    }}
                >Top Rated Restaurants</button>
            </div>

            <div className="res-container">
                {resList.map((restaurant, index) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />

                ))}


            </div>
        </div>
    )
};
export default Body;

