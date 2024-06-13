import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice"
import ItemList from "./ItemList";



const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (

        <div className="m-5 p-5 text-center">
            <h1 className="text-2xl font-bold m-2 p-2">Cart</h1>

            <div className="w-6/12 m-auto">
                <ItemList items={cartItems} inCart={true} />
            </div>

            {cartItems.length !== 0 && <div>
                <button className="bg-black text-white rounded-lg m-1 p-1"
                    onClick={() => handleClearCart()}>
                    Clear Cart
                </button>
            </div>}



        </div>


    )
}

export default Cart;