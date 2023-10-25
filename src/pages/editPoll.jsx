import {useState} from "react";
import {deletePoll, editPoll} from "../services/apiService.js";
import {Navigate, useLocation, useNavigate} from "react-router-dom";



const EditPoll = () => {
    const { state }= useLocation();
    const navigate = useNavigate();
    console.log(state);
    const [pollData, setPollData] = useState({
        id: state.id,
        title: state.title,
        description: state.description,
        status: state.status,
        publicPoll: state.publicPoll
    });

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;

        const newValue = type === "checkbox" ? checked : value;

        setPollData((prevData) => ({
            ...prevData,
            [name]: newValue,
        }));
    }

    const handleEditPoll = async () => {
        await editPoll(pollData);
        navigate('/polls');
    }

    const handleDeletePoll = async () => {
        await deletePoll(pollData);
        navigate('/polls');
    }
    return (
        <div>
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
                        onChange={handleChange}
                    />
                </div>
            </div>
            <button onClick={handleEditPoll}>Edit Poll</button>
            <button onClick={handleDeletePoll}>Delete Poll</button>
        </div>
    )
}

export default EditPoll;