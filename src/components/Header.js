import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [login, setLogin] = useState("Login");
    const handleChange = () => {
        login == "Login" ? setLogin("Logout") : setLogin("Login");


    }
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus == true ? "✅" : "🔴"}</li>
                    <li><Link className="header-links" to="/">Home</Link></li>
                    <li><Link className="header-links" to="/about">About Us</Link></li>
                    <li><Link className="header-links" to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={handleChange} >{login}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header;