import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child2" },
    [React.createElement("h1", { id: "head" }, "hey there1"), React.createElement("h2", { id: "head" }, "hello")]),
React.createElement("div", { id: "child1" },
    [React.createElement("h1", { id: "head" }, "hey thereyo"), React.createElement("h2", { id: "head" }, "hello")])]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);