import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import { useState } from "react";



const Restaurant = ()=>{
   
    const {resId} = useParams();

    const [showIndex,setShowIndex] = useState(null);
    const [hide,setHide] = useState(true);
      
    const resInfo = useResturantMenu(resId);
    const dummy = "Dummy Data";

    if(resInfo === null ) return <Shimmer/>

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>{
        return c?.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"});
    // console.log(categories)
    return(
        <div className="text-center">
            <h1 className="my-6 font-bold text-2xl">{name}</h1>
            <p className="font-bold">{cuisines.join(", ")} - {costForTwoMessage}</p>
             {/* categories accordin */}
            {categories.map((category,index)=>{
                return <RestaurantMenuCategory key={category?.card?.card?.title} data={category?.card?.card} showItems={index === showIndex? true : false} setHide={()=>{setHide(!hide)}} setShowIndex={()=>setShowIndex(showIndex === index ? null: index)} dummy={dummy}/>
            })}
        </div>
    )
}

export default Restaurant;