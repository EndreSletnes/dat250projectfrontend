import React, {useEffect, useState} from "react";
import {deletePoll, editPoll, linking, openClosePoll} from "../services/apiService.js";
import {useLocation, useNavigate} from "react-router-dom";
import CustomNavBar from "../components/navBar.jsx";



const Linking = () => {

    useEffect(() => {
        if(localStorage.getItem("userId") === null)navigate('/');

    }, [])


    const { state }= useLocation();
    const navigate = useNavigate();
    let [hidden, setHidden] = useState(true);
    const [pollData, setPollData] = useState({
        id: state.id,
        title: state.title,
        description: state.description,
        status: state.status,
        publicPoll: state.publicPoll

    });
    let [code, setCode] = useState('');


    const handleTryLinking = async () => {
        const l = await linking(state.pollData.id);
        setCode(l.message);
        setHidden(false);
    }
    return (
        <div>
            <CustomNavBar/>
            <h1>Link poll {state.pollData.title}</h1>
            <button onClick={handleTryLinking}>Get Code To Link</button>
            <br/>
            <span hidden={hidden}>{code}</span>
        </div>
    )
}

export default Linking;