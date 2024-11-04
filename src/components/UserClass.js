import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "http://dummy"
            }
        }
        // console.log(this.props.name+"Child Constructor is called");
    };

    async componentDidMount(){
        // console.log(this.props.name+"Child Component did Mount");
        const data = await fetch("https://api.github.com/users/Shubham15Z");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json,
        })
    }

    render () {
        const {name, location, avatar_url} = this.state.userInfo;
        // console.log("Child Render is called")
        debugger;
        return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @ajaybhan02</h4>
            </div>
        )
    }
}

export default UserClass