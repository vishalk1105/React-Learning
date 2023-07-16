import React from "react";
import ReactDOM from "react-dom/client.js";

const parent = React.createElement("div", { id: "parnet" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is Namaste React"),
    React.createElement("h2", {}, "by Vishal Kamble"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is Namaste React"),
    React.createElement("h2", {}, "by Vishal Kamble"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
