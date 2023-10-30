import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client.js";
import Header from "./components/Header";
import ReastaurantConatiner from "./components/ReastaurantConatiner";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import ReasaurantMenu from "./components/ReastaurantMenu";
import UserContext from "./utils/UserContext";

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const data = {
      name: "Vishal Kamble",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ logginUser: userName, setUserName }}>
      <div className="root">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const Grocery = lazy(() => import("./components/Grocery"));

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
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/resturantmenu/:resId",
        element: <ReasaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRoute} />);
