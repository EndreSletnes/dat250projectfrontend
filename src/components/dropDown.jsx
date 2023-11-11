import './dynamicList.css'
import {useNavigate} from "react-router-dom";
import {logOut} from "../services/apiService.js";
import Dropdown from "react-bootstrap/Dropdown";

const UserDropDown = () => {
    const navigate = useNavigate();
    const handleLogout = async() => {
        await logOut();
        navigate('/');
    }
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Menu
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => {navigate('/editUser')}}>Edit User Data</Dropdown.Item>
                <Dropdown.Item onClick={() => {handleLogout()}} >Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

UserDropDown.propTypes = {
}

export default UserDropDown;