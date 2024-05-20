const heading = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child2" },
    [React.createElement("h1", { id: "head" }, "hey there"), React.createElement("h2", { id: "head" }, "hello")]),
React.createElement("div", { id: "child1" },
    [React.createElement("h1", { id: "head" }, "hey there"), React.createElement("h2", { id: "head" }, "hello")])]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);