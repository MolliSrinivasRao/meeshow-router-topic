import React from "react";
import '../style/studentlogin.css';
import { Link } from "react-router-dom";

function Studentlogin() {
    return (
        <div className="student-header">
            <h1>Studentlogin</h1>
            <form>
                    <div>
                        <label>FirstName:
                            <input type="text" className="firstname"></input>
                        </label>
                    </div>
                    <div>
                        <label>LastName:
                            <input type="text" className="LastName"></input>
                        </label>
                    </div>
                    <div>
                        <label>email:
                            <input type="mail" className="email"></input>
                        </label>
                    </div>
                    <div>
                        <label>Password:
                            <input type="password" className="password"></input>
                        </label>
                    </div>
                    <div>
                        <label>Conform Password:
                            <input type="password" className="conformpassword"></input>
                        </label>
                    </div>

                </form>
                <button><Link to={'App'}>Submit</Link></button>
        </div>
    )
}
export default Studentlogin;