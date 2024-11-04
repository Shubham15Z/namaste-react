import { useEffect, useState } from "react"
import { LIST_RESTAURANT } from "./constants";

const useListOfRestuarant = () => {

    const [listOfRestaurant, setListOfRestuarant] = useState([]);
    const [filteredRestaurent, setFilteredRestuarant] =  useState([]);

    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(LIST_RESTAURANT);
        const json = await data.json();
        setListOfRestuarant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestuarant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return { listOfRestaurant, filteredRestaurent, setListOfRestuarant, setFilteredRestuarant };
}

export default useListOfRestuarant;