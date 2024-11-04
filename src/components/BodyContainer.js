import RestaurantCard from "./RestuarantCard";
import { useState, useEffect } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfRestuarant from "../utils/useListOfRestaurant";

const BodyContainer = () => {
    const { listOfRestaurant,  filteredRestaurent, setFilteredRestuarant} = useListOfRestuarant();

    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){ return <h1>Please Check your Internet Connection</h1>}

    return listOfRestaurant.length === 0 ? (
         <Shimmer/> 
    ) : (
        <div className="body-container">
            <div className="filter">
                <div className="search">
                    <input
                     className="search-box"
                     type="text"
                     placeholder="Search for restuarants"
                     value={searchText}
                     onChange={(e) => {
                        setSearchText(e.target.value);
                     }}
                    />
                    <button onClick={() => {
                     const filteredRestaurent = listOfRestaurant.filter((res) =>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                     );

                     setFilteredRestuarant(filteredRestaurent);
                    }}>Search</button>
                </div>
                <button
                  className="filter-btn"
                  onClick={() => {
                    const filteredList = listOfRestaurant.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                    setFilteredRestuarant(filteredList);
                  }}
                >
                  Top Rated Restuarants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurent.map((restaurant) => (
                    <Link
                     key={restaurant.info.id}
                     to={"/restaurants/"+restaurant.info.id}
                    >
                        <RestaurantCard  resData={restaurant}/>
                    </Link>
                ))}
            </div>
        </div>
    )
};

export default BodyContainer;