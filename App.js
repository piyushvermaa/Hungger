import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import About from "./src/components/About";
import ErrorComponent from "./src/components/Error";
import Service from "./src/components/Service";
import Cart from "./src/components/Cart";
import RestaurantMenu from "./src/components/RestaurantMenu";



//composing the component
const HeadComponents=()=>{

    

    return(
        <>
        <Header/>
        <Outlet/>

        </>
    );
}
//creating a browser router
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <HeadComponents/>,
        errorElement: <ErrorComponent/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/service",
                element: <Service/>,
            },
            {
                path: "/cart",
                element: <Cart/>,
            },
            {
                path: "*",
                element: <ErrorComponent/>,
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu/>,
            }
        ],
    },
]);

//passing a react element in root
const root = ReactDOM.createRoot(document.getElementById("root"));
//async defer
root.render(
    <RouterProvider router={appRouter}>
        <HeadComponents/>
    </RouterProvider>);
