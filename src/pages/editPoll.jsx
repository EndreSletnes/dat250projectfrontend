import React, {useEffect, useState} from "react";
import {deletePoll, editPoll, linking, openClosePoll} from "../services/apiService.js";
import {useLocation, useNavigate} from "react-router-dom";
import CustomNavBar from "../components/navBar.jsx";



const EditPoll = () => {
    useEffect(() => {
        if(localStorage.getItem("userId") === null)navigate('/');
    }, [])


    const { state }= useLocation();
    const navigate = useNavigate();
    let [hidden, setHidden] = useState(true);
    console.log(state);
    const [pollData, setPollData] = useState({
        id: state.id,
        title: state.title,
        description: state.description,
        status: state.status,
        publicPoll: state.publicPoll

    });

    const handleLinking = async () => {
        navigate('/linking', { state: { pollData } });
    }


    const handleChange = (e) => {
        setHidden(true);
        const {name, value, type, checked} = e.target;

        const newValue = type === "checkbox" ? !checked : value;

        setPollData((prevData) => ({
            ...prevData,
            [name]: newValue,
        }));
    }

    const handleEditPoll = async () => {
        if(pollData.title!==''){
            await editPoll(pollData);
            navigate('/polls');
        }
        else{
            setHidden(false);
        }

    }

    const handleOpenClosePoll = async () => {
        console.log(pollData.id);
        await openClosePoll(pollData.id);
        navigate('/polls');
    }

    const handleDeletePoll = async () => {
        await deletePoll(pollData);
        navigate('/polls');
    }
    return (
        <div>
            <CustomNavBar/>
            <h1>Edit Your Poll</h1>
            <div className="form-container">
                <div className="input-container">
                    <label htmlFor="newTitle">Title: </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={pollData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="newDescription">Description: </label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={pollData.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="privateCheckbox">Private</label>
                    <input
                        type="checkbox"
                        id="privateCheckbox"
                        name="publicPoll"
                        checked={!pollData.publicPoll}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <button onClick={handleEditPoll}>Edit Poll</button>
            <button onClick={handleDeletePoll}>Delete Poll</button>
            <button onClick={handleOpenClosePoll}>{state.status === false ? 'Open' : 'Close'} Poll</button>
            <button onClick={handleLinking}>Link Device</button>
            <p style={{color: "red"}} hidden={hidden}> You have to write a title</p>
        </div>
    )
}

export default EditPoll;