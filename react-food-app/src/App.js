import React from "react";
import ReactDOM from "react-dom/client.js";
import Header from "./components/Header";
import ReastaurantConatiner from "./components/ReastaurantConatiner";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import ReasaurantMenu from "./components/ReastaurantMenu";

const AppLayout = () => {
  return (
    <div className="root">
      <Header />
      <Outlet />
    </div>
  );
};

const AppRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <ReastaurantConatiner /> },
      { path: "/about", element: <About /> },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturantmenu/:resID",
        element: <ReasaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRoute} />);
