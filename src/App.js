import React from "react";
import Aboutus from "./components/aboutus";
import Contact from "./components/contact";
import Home from "./components/home";
import Login from "./components/login";
import Navbar from "./components/navbar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
function Linktag() {
  return (
    <div>
      <Navbar />
      <ul>  
        <li><Link to={'/Login'}>Login</Link></li>
        <li><Link to={'/Home'}>Home</Link></li>
        <li><Link to={'/Contact'}>Contact</Link></li>
        <li><Link to={'/Aboutus'}>Aboutus</Link></li>
      </ul>
    </div>
  )
}
function App() {
  return (
    <BrowserRouter>
      <Linktag />
      <Routes>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Aboutus" element={<Aboutus />}></Route>

      </Routes>
    </BrowserRouter>
  );
}
export default App;
