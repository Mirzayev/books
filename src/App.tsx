import {useEffect, useState} from 'react'
import SignUp from "./components/sign-up/SignUp.tsx";
import SignIn from "./components/sign-in/SignIn.tsx";
import HomePage from "./pages/home/HomePage.tsx";
import {createBrowserRouter, RouterProvider, RouteObject} from "react-router-dom";


function App(routes: RouteObject[], locationArg?: Partial<Location> | string) {



    const router= createBrowserRouter([
        {
            path: "/",
            element: <HomePage/>,
        },
        {
            path: "/login",
            element: <SignUp/>,
        },
        {
            path: "/sign-in",
            element: <SignIn/>,
        }
    ])



    return (

        <div className=''>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App
