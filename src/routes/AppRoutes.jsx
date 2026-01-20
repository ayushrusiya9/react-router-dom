import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Service from "../pages/Service";

const App = () => {
  return(
    <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    </>
    )
}

export default App;