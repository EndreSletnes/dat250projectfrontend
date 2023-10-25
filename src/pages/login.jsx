import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigator = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = () => {
        const loginCheck = true; //use the login api here when it's implemented

        if (loginCheck) {
            navigator('/polls');
        }
    }

    return (
        <div>
            <h1>Login Screen</h1>
            <div className="form-container">
                <div className="input-container">
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
            </div>
            <button onClick={handleLogin}>Login</button>
            <Link to="/register">Sign up</Link>
        </div>
    );
};

export default Login;