import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";



const Cart = ()=>{

    const cartItems = useSelector((store)=> store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = ()=>{
        dispatch(clearItem());
    }

    return(
        <div className="m-4 p-4 text-center">
            <h1 className="text-xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>ClearCart</button>
                <ItemList items={cartItems}/>
                {cartItems.length === 0 && <h2>Cart is empty. Add Items to the Cart!</h2>}
            </div>
        </div>
    )
}

export default Cart;