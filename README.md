// React element

const heading = <h1>Rendering From React Element</h1>;

// React Component
// In jsx We can write any javascript code inside the "{}".. 

Example :-  const Title = () => (
                <div className="heading">
                    {heading}
                    <h1>Rendering From React Component-1.</h1>
                </div>
            );

// Title_2 Component where component composition take place,
// i.e when a component called inside a another component is called compnent composition..