import React from "react";
import '../style/admin.css';
import { Link } from "react-router-dom";

function Adminlogin() {
    return (
        <div className="admin-header">
            <h1>Adminlogin</h1>
            <from className="admin-form">
                <div>
                    <label>Admin Id</label>
                </div>
                <div>
                    <input type="mail"></input>
                </div>
                <div>
                    <label> Password</label>
                </div>
                <div>
                    <input type="password"></input>
                </div>
                <div>
                    <button><Link to={"App"}>Sumbit</Link></button>
                </div>
            </from>
        </div>
    )
}
export default Adminlogin;