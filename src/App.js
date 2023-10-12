import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Components/Header"
import Body from './Components/Body';
import {Outlet, RouterProvider, createBrowserRouter} from "react-router-dom"
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Error from './Components/Error';
import RestaurantMenu from './Components/RestaurantMenu';
import '../index.css'


//here we have created a routing configuration using createBrowserRouter

const App= ()=>{
    return (
        <div className="app">
        <Header/>
        <Outlet/>
       
        </div>
    )
}


const appRouter=createBrowserRouter([
    {
        path:'/',
        element : <App />,
        children:[
            {
                path:'/',
                element : <Body/>
            },
            {
                path:'/about',
                element : <About/>
            },
            {
                path:'/contact',
                element : <ContactUs/>
            },{
                path: '/restaurants/:resId',
                element : <RestaurantMenu/>

            }
            
        ],
        errorElement : <Error />
    },
    

    ]
)


const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)

