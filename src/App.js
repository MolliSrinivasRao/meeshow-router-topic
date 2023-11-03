import React from "react";
import Aboutus from "./components/aboutus";
import Contact from "./components/contact";
import Home from "./components/home";
import Login from "./components/login";
import Navbar from "./components/navbar";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import Adminlogin from "./components/adminlogin";
import Studentlogin from "./components/studentlogin";
import Errorhandle from "./components/errorhandle";

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
        <Route path="Login" element={<Login />}>
          <Route path="Adminlogin" element={<Adminlogin />}></Route>
          <Route path="Studentlogin" element={<Studentlogin />}></Route>
          <Route path="*" element={<Errorhandle />}></Route>
        </Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Aboutus" element={<Aboutus />}></Route>
      </Routes>

    </BrowserRouter>
  );
}
export default App;
