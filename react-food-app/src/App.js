import React from "react";
import ReactDOM from "react-dom/client.js";
import Header from "./components/Header";
import ReastaurantConatiner from "./components/ReastaurantConatiner";

const AppLayout = () => {
  return (
    <div className="root">
      <Header />
      <ReastaurantConatiner />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
