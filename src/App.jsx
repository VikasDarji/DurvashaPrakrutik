import "./App.css";
import Navbar from "./componets/Navbar";
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { useState } from "react";

function App() { 
  
   const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>
    },
    { 
      path: "About",
      element:<> <Navbar/><About/></>
    },
    {
      path: "Contact",
      element: <><Navbar/><Contact/></>
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
   
    
    <Footer/>
    </>
  );
}

export default App;
