import RestaurantCard, { withPromotedLabel } from "./RestuarantCard";
import { useState, useEffect } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfRestuarant from "../utils/useListOfRestaurant";

const BodyContainer = () => {
    const { listOfRestaurant,  filteredRestaurent, setFilteredRestuarant} = useListOfRestuarant();

    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    // console.log(listOfRestaurant);

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){ return <h1>Please Check your Internet Connection</h1>}

    return listOfRestaurant.length === 0 ? (
         <Shimmer/> 
    ) : (
        <div className="body-container">
            <div className="filter flex">
                <div className="search p-4 m-4">
                    <input
                     className="border border-black py-1"
                     type="text"
                     placeholder="Search for restuarants"
                     value={searchText}
                     onChange={(e) => {
                        setSearchText(e.target.value);
                     }}
                    />
                    <button
                     className="px-4 py-1 m-4 bg-green-100 rounded-md"
                     onClick={() => {
                     const filteredRestaurent = listOfRestaurant.filter((res) =>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                     );

                     setFilteredRestuarant(filteredRestaurent);
                    }}>Search</button>
                </div>
                <div className="search p-4 m-4 flex items-center">
                <button
                  className="px-4 py-1 bg-gray-200 rounded-md"
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

            </div>
            <div className="flex flex-wrap">
                {filteredRestaurent.map((restaurant) => (
                    <Link
                     key={restaurant.info.id}
                     to={"/restaurants/"+restaurant.info.id}
                    >
                        {restaurant.info.promoted ? (
                            <RestaurantCardPromoted resData={restaurant}/>
                         ) : (
                            <RestaurantCard  resData={restaurant}/>
                        )}
                        
                    </Link>
                ))}
            </div>
        </div>
    )
};

export default BodyContainer;