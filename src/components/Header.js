import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

// import UserContext from "../utils/UserContext";

const Header = () => {
    const [login, setLogin] = useState("Login");
    const handleChange = () => {
        login == "Login" ? setLogin("Logout") : setLogin("Login");


    }
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    // const { loggedInUser } = useContext(UserContext);
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mb-1 sm:bg-yellow-100">
            <div className="logo-container">
                <img className="w-[230px]" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus == true ? "✅" : "🔴"}</li>
                    <li className="px-4"><Link className="header-links" to="/">Home</Link></li>
                    <li className="px-4"><Link className="header-links" to="/about">About Us</Link></li>
                    <li className="px-4"><Link className="header-links" to="/contact">Contact Us</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to="/cart">Cart ({cartItems.length})</Link></li>
                    {/* <li className="px-4 font-bold">{loggedInUser}</li> */}
                    <button className="login" onClick={handleChange} >{login}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header;