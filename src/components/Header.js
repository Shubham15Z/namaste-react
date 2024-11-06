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
        <div className="flex justify-between bg-pink-100 shadow-md mb-2 h-28 sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-46 h-full" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button 
                     className="login-btn px-4"
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