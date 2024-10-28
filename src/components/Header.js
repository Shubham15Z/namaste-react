import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [btnName1, setBtnName1] = useState("Login");
    console.log("Header render");

    useEffect(() => {
        console.log("Use Effect Called");
    }, [btnName1])

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contsct Us</li>
                    <li>Help</li>
                    <li>Cart</li>
                    <button 
                     className="login-btn"
                     onClick={() => {
                        btnName1 === "Login"
                        ? setBtnName1("Logout")
                        : setBtnName1("Login");
                     }}
                    >
                     {btnName1}
                    </button>
                </ul>
            </div>
        </div>
    )
};

export default Header;