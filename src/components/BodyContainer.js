import RestaurantCard from "./RestuarantCard";
import { useState, useEffect } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const BodyContainer = () => {
    const [listOfRestuarant, setListOfRestuarant] = useState([]);
    const [filteredRestuarent, setFilteredRestuarant] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setListOfRestuarant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestuarant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return listOfRestuarant.length === 0 ? (
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
                     const filteredRestuarent = listOfRestuarant.filter((res) =>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                     );

                     setFilteredRestuarant(filteredRestuarent);
                    }}>Search</button>
                </div>
                <button
                  className="filter-btn"
                  onClick={() => {
                    const filteredList = listOfRestuarant.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                    setListOfRestuarant(filteredList);
                  }}
                >
                  Top Rated Restuarants
                </button>
            </div>
            <div className="res-container">
                {filteredRestuarent.map((restaurant) => (
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