import { useEffect,useState } from "react";
import { MENU_API } from "./constants";


const useResturantMenu=(resId)=>{
    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchdata();
    },[])
    
    const fetchdata = async ()=>{
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setResInfo(json?.data);
      // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
    }
    return resInfo;
}

export default useResturantMenu;

