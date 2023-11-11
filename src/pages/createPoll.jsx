import {useEffect, useState} from "react";
import {createPoll} from "../services/apiService.js";
import {useNavigate} from "react-router-dom";
import UserDropDown from "../components/dropDown.jsx";
import CustomNavBar from "../components/navBar.jsx";


const CreatePoll = () => {
    let title = false;
    let [hidden, setHidden] = useState(true);
    const navigate = useNavigate();
    const [pollData, setPollData] = useState({
        title: "",
        description: "",
        status: true,
        publicPoll: true,
        owner: {
            id: localStorage.getItem("userId")
        }
    });

    useEffect(() => {
        if(localStorage.getItem("userId") === null)navigate('/');
    }, [])


    const handleChange = (e) => {
        setHidden(true);
        const {name, value, type, checked} = e.target;

        const newValue = type === "checkbox" ? !checked : value;

        setPollData((prevData) => ({
            ...prevData,
            [name]: newValue,
        }));
    }

    const handleCreatePoll = async () => {
        if(pollData.title !== ''){
            console.log(pollData);
            await createPoll(pollData);
            navigate('/polls');
        }
        else{
            setHidden(false);
        }

    }

    return (
        <div>
            <CustomNavBar/>

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
            <p style={{color: "red"}} hidden={hidden}> You have to write a title</p>
            <UserDropDown></UserDropDown>
        </div>
    )
}

export default CreatePoll;