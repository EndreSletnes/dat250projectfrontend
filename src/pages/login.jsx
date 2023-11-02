import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {loginUser} from "../services/apiService.js";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let [hidden, setHidden] = useState(true);
    const navigator = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        setHidden(true);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        const loginCheck = await loginUser(username, password); //use the login api here when it's implemented
        //I don't know how to do this :C
        console.log(loginCheck);
        if (loginCheck) {
            navigator('/polls');
        }
        else{
            console.log("incorrect");
            setHidden(false);
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
                        onKeyDown={(e) => {if(e.key === "Enter")handleLogin()}}
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        onKeyDown={(e) => {if(e.key === "Enter")handleLogin()}}
                    />
                </div>
            </div>
            <button onClick={handleLogin}>Login</button>
            <Link to="/register">Sign up</Link>
            <p style={{color: "red"}} hidden={hidden}> Incorrect password or username</p>
        </div>
    );
};

export default Login;