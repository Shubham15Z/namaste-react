import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {
        name,
        cuisines,
        avgRating,
        cloudinaryImageId,
        costForTwo,
        sla,
    } = resData?.info
    return (
        <div className="m-4 p-4 w-[250px] rounded-md bg-gray-100 hover:bg-gray-200 hover:scale-110">
            <img
              className="rounded-md"
              alt="food-logo"
              src={CDN_URL+cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime} minutes</h4>
        </div>
    );

};

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;