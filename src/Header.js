import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/logo.png";
import userIcon from "./images/usericon.png";

const HeaderComponent = () => {
    return (
        <div className="container">
            <img src={logo}  />
            <input type="text" placeholder="search"></input>
            <img src={userIcon}  />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>)