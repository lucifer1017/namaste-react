import RestaurantCard from "./RestaurantCard"
import { RESTAURANT_API } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Shimmer from "./Shimmer";

const Body = () => {
    const [resList, setResList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredres, setFilteredres] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {

        const receivedData = await fetch(RESTAURANT_API);
        const response = await receivedData.json();
        setResList(response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // the ? is part of Optional chaining
        setFilteredres(response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    //This is an example of Conditional Rendering
    //resList.length === 0?<Shimmer /> :


    return resList?.length == 0 ? <Shimmer /> : (

        <div className="body">
            {/* <div className="search-container"><SearchBar onSearch={handleSearch} /></div> */}

            <div className="filter">
                <div className="search">
                    <input type="text" placeholder="Type here.." className="searchbox" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="search-btn" onClick={() => {
                        //Filter the data and render the UI.
                        const filterData = resList?.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase());
                        })
                        setFilteredres(filterData);


                    }}>Search</button>
                </div>
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = resList.filter((res) => {
                            console.log(res.info.avgRating + " hi ");
                            return res?.info?.avgRating > 4;
                        })

                        setFilteredres(filteredList);
                    }}
                >Top Rated Restaurants</button>
            </div>

            <div className="res-container">
                {filteredres?.map((restaurant, index) => (
                    <Link key={restaurant?.info?.id} className="rescard-links" to={"/restaurants/" + restaurant?.info?.id}><RestaurantCard resData={restaurant} /></Link>

                ))}


            </div>
        </div>
    )

};
export default Body;

// searchbar code
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