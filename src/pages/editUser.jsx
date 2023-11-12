import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import './register.css';
import {editUser, getUser} from "../services/apiService.js";
import CustomNavBar from "../components/navBar.jsx";

const EditUser = () => {
    const navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState('');
    const [hasPressedRegister, setHasPressedRegister] = useState(false);
    const [hasErrors, setHasErrors] = useState(false);
    let [hidden, setHidden] = useState(true);
    const [fetched, setFetched] = useState(false);
    const navigator = useNavigate();
    const [userData, setUserData] = useState({
        id: -1,
        userName: '',
        firstName: '',
        lastName: '',
        password: ''
    });

    useEffect(() => {
        console.log(fetched);
        if(fetched === false){
            getUser(localStorage.getItem("userId")).then(
                (data) => {
                    if(data !== false){setUserData(data)}
                    else{navigate('/')}
                }
            )
            setFetched(true);
        }

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
        setHidden(true);
        const {name, value} = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleEdit = async () => {
        console.log(userData);
        setHasPressedRegister(true);
        if (!hasErrors) {
            const response = await editUser(userData);
            if(response === false ){
                setHidden(false);
            }
            else{
                navigator('/polls');
            }

        }
    }

    return (
        <div>
            <CustomNavBar/>
            <h1>Edit your data</h1>

            <div className="form-container">
                <div className="input-container">
                    <label htmlFor="newUsername">Username: </label>
                    <input
                        type="text"
                        id="username"
                        name="userName"
                        value={userData.userName}
                        onChange={handleChange}
                        onKeyDown={(e) => {if(e.key === "Enter")handleEdit()}}
                    />
                    {userData.userName === '' && hasPressedRegister && (
                        <span className="error">*</span>
                    )}
                    <span style={{color: "red"}} hidden={hidden}> Username already in use</span>
                </div>

                <div className="input-container">
                    <label htmlFor="newFirstname">Firstname: </label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleChange}
                        onKeyDown={(e) => {if(e.key === "Enter")handleEdit()}}
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
                        onKeyDown={(e) => {if(e.key === "Enter")handleEdit()}}
                    />
                    {userData.lastName === '' && hasPressedRegister && (
                        <span className="error">*</span>
                    )}
                </div>

                <div className="input-container">
                    <label htmlFor="newPassword">Password: </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        onKeyDown={(e) => {if(e.key === "Enter")handleEdit()}}
                    />
                    {userData.password === '' && hasPressedRegister && (
                        <span className="error">*</span>
                    )}
                </div>

                <div className="input-container">
                    <label htmlFor="confirmPassword">Confirm password: </label>
                    <input
                        type="password"
                        id="confirmedPassword"
                        value={confirmPassword}
                        onChange={(event) => {
                            setConfirmPassword(event.target.value);
                        }}
                        onKeyDown={(e) => {if(e.key === "Enter")handleEdit()}}
                    />
                    {userData.password !== confirmPassword && hasPressedRegister && (
                        <span className="error">Password does not match</span>
                    )}
                </div>
            </div>
            <button onClick={handleEdit}>Edit</button>
        </div>
    );
};

export default EditUser;