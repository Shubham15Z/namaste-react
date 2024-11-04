import { useState } from "react";

const User = (props) => {

    const [count] = useState(0);
    const [count2] = useState(2);
    return (
        <div className="user-card">
            <h2>Name: {props.name}</h2>
            <h3>Location: Pune</h3>
            <h4>Contact: @ajaybhan02</h4>
            <h4>{count}</h4>
            <h4>{count2}</h4>
        </div>
    )
}

export default User;