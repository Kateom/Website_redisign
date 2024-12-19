import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Products from "./Components/Products";

function App() {
  return <>
  <Router>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/contact'element={<Contact/>}></Route>
      <Route path='/products'element={<Products/>}></Route>
    </Routes>
  <Footer/>
  </Router>
   
  </>;
}

export default App;
