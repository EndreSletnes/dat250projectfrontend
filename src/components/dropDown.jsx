import PropTypes from "prop-types";
import './dynamicList.css'
import {Link, useNavigate} from "react-router-dom";
import {logOut, sharePoll} from "../services/apiService.js";
import {createElement, useState} from "react";
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