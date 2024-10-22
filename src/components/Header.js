import { Link } from "react-router-dom";
import {LOGO_URL} from "../utils/constants"
import { useState,useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = ()=>{

    const [btnName,setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    // subscribing to the store using a selector
    const cartItems = useSelector((store)=> store.cart.items);
     console.log(cartItems);
    return(
    <div className="flex justify-between  mb-2 bg-pink-100 shadow">
        <div className="logo-container">
            <img className="w-36" src={LOGO_URL} alt=""/>
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 cursor-pointer">
                <li className="px-4">OnlineStatus:{onlineStatus? "✅": "🔴"}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                <li className="px-4 font-bold text-xl"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
                <button className="btn px-4 button  rounded hover:bg-slate-50" onClick={()=>{
                     btnName === "Login" ? setBtnName("Logout")
                     :setBtnName("Login");
                }}>{btnName}</button>
                <li className="px-4">{loggedInUser}</li>
            </ul> 
        </div>
    </div>
)
}

export default Header;