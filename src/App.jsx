import "./App.css";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import Home from "./componets/Home";
import About from "./componets/About";
import Contact from "./componets/Contact";
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
