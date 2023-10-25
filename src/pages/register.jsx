import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import './register.css';
import {registerUser} from "../services/apiService.js";

const Register = () => {
    const [confirmPassword, setConfirmPassword] = useState('');
    const [hasPressedRegister, setHasPressedRegister] = useState(false);
    const [hasErrors, setHasErrors] = useState(false);

    const [userData, setUserData] = useState({
        userName: '',
        firstName: '',
        lastName: '',
        password: ''
    });

    useEffect(() => {
        const checkInputs = () => {
            setHasErrors(false);

            if (userData.password !== confirmPassword) {
                setHasErrors(true);
                return;
            }

            for (const key in userData) {
                if (key in userData && userData[key] === ''){
                    setHasErrors(true);
                    return;
                }
            }
        }
        
        checkInputs();
    }, [userData, confirmPassword]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleRegister = async () => {
        setHasPressedRegister(true);
        if (!hasErrors) {
            await registerUser(userData);
        }
    }

    return (
        <div>
            <h1>Register new account</h1>

            <div className="form-container">
                <div className="input-container">
                    <label htmlFor="newUsername">Username: </label>
                    <input
                        type="text"
                        id="username"
                        name="userName"
                        value={userData.userName}
                        onChange={handleChange}
                    />
                    {userData.userName === '' && hasPressedRegister && (
                        <span className="error">*</span>
                    )}
                </div>

                <div className="input-container">
                    <label htmlFor="newFirstname">Firstname: </label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleChange}
                    />
                    {userData.firstName === '' && hasPressedRegister && (
                        <span className="error">*</span>
                    )}
                </div>

                <div className="input-container">
                    <label htmlFor="newLastname">Lastname: </label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastName"
                        value={userData.lastName}
                        onChange={handleChange}
                    />
                    {userData.lastName === '' && hasPressedRegister && (
                        <span className="error">*</span>
                    )}
                </div>

                <div className="input-container">
                    <label htmlFor="newPassword">Password: </label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                    />
                    {userData.password === '' && hasPressedRegister && (
                        <span className="error">*</span>
                    )}
                </div>

                <div className="input-container">
                    <label htmlFor="confirmPassword">Confirm password: </label>
                    <input
                        type="text"
                        id="confirmedPassword"
                        value={confirmPassword}
                        onChange={(event) => {
                            setConfirmPassword(event.target.value);
                        }}
                    />
                    {userData.password !== confirmPassword && hasPressedRegister && (
                        <span className="error">Password does not match</span>
                    )}
                </div>
            </div>

            <button onClick={handleRegister}>Register</button>
            <br />
            <Link to="/">Already have an account? Login</Link>
        </div>
    );
};

export default Register;