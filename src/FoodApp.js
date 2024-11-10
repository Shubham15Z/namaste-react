import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyContainer from "./components/BodyContainer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy( () => import("./components/Grocery"));

const AppLayout = () => {

    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Ajay Bhan",
        };
        setUserName(data.name);
    }, []);
    
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                <div className="app">
                    <Header/>
                    <Outlet/>
                </div>
            </UserContext.Provider>  
        </Provider>
        
    ) 
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <BodyContainer/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <ContactUs/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>,
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);