import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = (<h1 className="head">Hello from JSX</h1>);

console.log(jsxHeading);

const Title = () => (
    <div>
        <h1 className="title">REACT COURSE</h1>
        <h3>Episode 03</h3>
    </div>
);

const HeadingComponent = () => (
    <div id="container">
        {/* <Title/>  */}
        {/* {Title()} */}
        <Title></Title>
        <h1 className="heading">Hello from Functional Component</h1>
        <FooterComponent/>
    </div>
);
// const HeadingComponent2 = () => (<h1>Hello from Functional Component</h1>);

const FooterComponent = function () {
    return <h3>This is Footer Component</h3>
}



// Assignment
// NESTED HEADER ELEMENT

const header = React.createElement(
    "div",
    {className: "title"},
    [
        React.createElement("h1", {}, "Heading using react create element H1"),
        React.createElement("h2", {}, "Heading H2"),
        React.createElement("h3", {}, "Heading H3"),
    ]
)

// Same Using JSX

const heading1 = (
    <div className="title">
        <h1>Heading using JSX H1</h1>
        <h2>Heading H2</h2>
        <h3>Heading H3</h3>
        <FooterComponent/>
    </div>
    
)

// Same Using Functional Component

const Heading3 = () => {
    return (
        <div className="title">
            <h1>Heading using Functional Component H1</h1>
            <h2>Heading using Functional Component H2</h2>
            <h3>Heading using Functional Component H3</h3>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading1);