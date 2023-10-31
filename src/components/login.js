import '../style/login.css';

function Login() {
    return (
        <div>
            <h1>Login pages</h1>
            <div className="login-page">
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
                <button>Login</button>
            </div>

        </div>

    )
}
export default Login;