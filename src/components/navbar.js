import React from "react";
import '../style/navbar.css';
import { BsSearch } from 'react-icons/bs';
import { FaMobileAlt } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';
import { BsCartCheck } from 'react-icons/bs';

function Navbar() {
    return (
        <div className="nav-header">
            <div>
                <img className="nav-logo-img" src="https://tse1.mm.bing.net/th?id=OIP.EBJLTiBiyylbpLFC0Uez3wHaDS&pid=Api&P=0&h=220"></img>
            </div>
            <div className="nav-inp">
                <BsSearch />
                <input type="text" className="nav-search" placeholder="try saree or kurtha "></input>
            </div>
            <div className="nav-text">
                <div className="nav-text-icon">
                    <FaMobileAlt className="nav-text-logo" />
                    <p>Mobile Download App</p>
                </div>
                <div className="nav-text-icon">
                    <p>Become a Supplier</p>
                </div>
                <div className="nav-text-icon">
                    <p>Newsroom</p>
                </div>
            </div>
            <div className="nav-profile">
                <div className="nav-profile-logo">
                    <BsPersonCircle />
                    <p>Profile</p>
                </div>
                <div className="nav-profile-logo">
                    <BsCartCheck />
                    <p>Cart</p>
                </div>
            </div>

        </div>
    );
}

export default Navbar;
