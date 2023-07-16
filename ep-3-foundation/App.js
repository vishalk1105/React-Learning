import React from "react";
import ReactDOM from "react-dom/client.js";

const Title = () => <h1>This is Titile</h1>;

const Header = () => {
  return (
    <div>
      <Title />
      <h1>Hello React JS</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
