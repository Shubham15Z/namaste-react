import {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {

    constructor(props){
        super(props);
        // console.log("Parent Constructor");
    };

    componentDidMount(){
        // console.log("Parent Component did Mount")
    }

    render() {
        // console.log("Parent Render");
        return (
            <div>
                <h1>About</h1>
                <div>
                    Logged In User
                    <UserContext.Consumer>
                        {({loggedInUser}) => (
                            <h1 className="font-bold">{loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                </div>
                <h2>This is React Course</h2>
                {/* <User name={"Ajay from Function"}/> */}
                <UserClass name={"Ajay from Class"} location={"Pune Class"}/>
            </div>
        ) 
    }
};

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is React Course</h2>
//             {/* <User name={"Ajay from Function"}/> */}
//             <UserClass name={"Ajay from Class"} location={"Pune Class"}/>
//         </div>
//     )
// }

export default About;