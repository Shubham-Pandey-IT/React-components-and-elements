import React from "react";
import ReactDOM from "react-dom"; 

// React element
const heading = <h1>Rendering From React Element</h1>;

// React Component
// In jsx We can write any javascript code inside the "{}".. 
const Title = () => (
    <div className="heading">
        {heading}
        <h1>Rendering From React Component-1.</h1>
    </div>
);

// Title_2 Component where component composition take place,
// i.e when a component called inside a another component is called compnent composition..

const Title_2 = () => (
    <div className="heading-1">
        <Title />
        <h2>Rendering From Component-2</h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title_2 />);
