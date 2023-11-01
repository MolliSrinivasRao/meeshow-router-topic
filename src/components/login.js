import { Link,Outlet} from 'react-router-dom';
function Login() {
    return (
        <div>
            <h1>Login pages</h1>
            <div className="login-page">
                <button ><Link to={'Adminlogin'}>Adminlogin</Link></button>
                <button ><Link to={'Studentlogin'}>Studentlogin</Link></button>
            </div>
            <Outlet />
        </div>

    )
}

export default Login;