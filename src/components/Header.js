import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName1, setBtnName1] = useState("Login");

    const onlineStatus = useOnlineStatus();

    useEffect(() => {
    }, [btnName1])

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
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