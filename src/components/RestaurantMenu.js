import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurentCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const {resId} =  useParams();

    const resInfo  = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer/>; 
    
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const itemCategories = 
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) => 
                c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    // console.log(itemCategories);    
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {itemCategories.map((category) => (
                <RestaurantCategory key={category.card.card.title} data={category.card.card}/>
            ))}
        </div>
    )
}

export default RestaurantMenu