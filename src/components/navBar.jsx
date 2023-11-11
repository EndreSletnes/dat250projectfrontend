import logo from "../../public/voting-box.png"
import {NavLink} from "react-router-dom";


const CustomNavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbarContainer">
                <div className="logo">
                    <img src={logo} alt="Logo"/>
                </div>
                <ul>
                    <li>
                        <NavLink to="/editUser">Edit user</NavLink>
                    </li>
                    <li>Log out</li>
                </ul>
            </div>
        </nav>
    )
}

export default CustomNavBar;