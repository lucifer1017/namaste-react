import LOGO_URL from "../utils/constants";
import { useState } from "react";
const Header = () => {
    const [login, setLogin] = useState("Login");
    const handleChange = () => {
        login == "Login" ? setLogin("Logout") : setLogin("Login");

    }
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login" onClick={handleChange} >{login}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header;