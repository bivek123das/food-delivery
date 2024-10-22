import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard=(props)=>{
    
    const {resData} = props;
    const {loggedInUser} = useContext(UserContext);

    const{cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla} = resData?.info;

    return(
        <div className="m-4 p-4 w-[250px] h-[500px] rounded-lg" style={{backgroundColor: "#f0f0f0"}}>
             <img src={CDN_URL+cloudinaryImageId} alt="res logo" className="rounded-lg"/>
            <h3 className="py-2 font-bold text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo} stars</h4>
            <h4>{sla?.deliveryTime} Minutes</h4>
            <h5>User : {loggedInUser}</h5>
        </div>
    )


}

// Higher order component
// input restaurantcard ===> restaurtantpromotedcard

export const withPromotedLabel = (RestaurantCard)=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white p-2 m-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
};

export default RestaurantCard;