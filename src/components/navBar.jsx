import logo from "../assets/voting-box.png"
import {NavLink, useNavigate} from "react-router-dom";
import "./navBar.css"
import {logOut} from "../services/apiService.js";


const CustomNavBar = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logOut();
        navigate('/');
    }

    return (
        <nav className="navbar">
            <div className="navbarContainer">
                <div className="logo">
                    <NavLink to={'/polls'} className="logoLink">
                        <img src={logo} alt="Logo"/>
                    </NavLink>
                </div>
                <div className="nav-elements">
                    <ul>
                        <li>
                            <NavLink to="/editUser">Edit user</NavLink>
                        </li>
                        <li>
                            <button onClick={handleLogout}>Log out</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default CustomNavBar;