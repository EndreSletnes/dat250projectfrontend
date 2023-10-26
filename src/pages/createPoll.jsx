import {useState} from "react";
import {createPoll} from "../services/apiService.js";
import {useNavigate} from "react-router-dom";


const CreatePoll = () => {
    let title = false;
    const navigate = useNavigate();
    const [pollData, setPollData] = useState({
        title: "",
        description: "",
        status: true,
        publicPoll: true,
        owner: {
            id: 1 //this will be changed to be current logged-in user
        }
    });

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;

        const newValue = type === "checkbox" ? checked : value;

        setPollData((prevData) => ({
            ...prevData,
            [name]: newValue,
        }));
    }

    const handleCreatePoll = async () => {
        if(pollData.title!==''){
            await createPoll(pollData);
            navigate('/polls');
        }

    }

    return (
        <div>
            <h1>Create a New Poll</h1>
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
            <button onClick={handleCreatePoll}>Create Poll</button>
        </div>
    )
}

export default CreatePoll;