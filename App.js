import React from "react";
import ReactDOM from "react-dom/client";

const Internal = () => (
    <h3> added to represent Component Composition</h3>
);
const hell = <h2> yolo</h2>
const Comp = (
    <div> {hell}</div>


);
// const Heading = () => (

//     <div className="root">


//         <h1>
//             hello
//             {Comp}
//         </h1>
//     </div>
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Comp);