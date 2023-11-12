import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {getPoll, vote} from "../services/apiService.js";
import {useEffect, useState} from "react";
import CustomNavBar from "../components/navBar.jsx";


const Vote = () => {
    const { state }= useLocation();
    const navigate = useNavigate();
    let { link } = useParams();
    let [exists, setExists] = useState(true);
    let [closed, setClosed] = useState(false);
    const [pollData, setPollData] = useState(
        {
            title: ""
        }
    );
    const [dataIsFetched, setDataIsFetched] = useState(false);

    useEffect(() => {
        if (!dataIsFetched) {
            getPoll(link).then(
                (data)=>{
                    console.log(data);
                    if(data !== false){
                        if(data.publicPoll === false && localStorage.getItem("userId") === null){
                            navigate('/');
                        }
                        else{
                            if(data.status === false){
                                setPollData(data);
                                setClosed(true);
                            }
                            else{
                                setPollData(data);console.log(data);
                                setDataIsFetched(true);
                            }
                        }
                    }
                    else{
                        setExists(false);
                    }


                }
            )
        }

    }, [dataIsFetched, pollData]);
    const handleVoting = async (color) => {
        const answer = {
            color: color,
            _user: {
                id: localStorage.getItem("userId")
            },
            poll: {
                id: pollData.id
            }
        }
        await vote(answer);
        navigate('/thanks');
    }
    return  (
        <div>
            {localStorage.getItem("userId") !== null && (<CustomNavBar></CustomNavBar>)}
            {exists && !closed && (<h1>Vote on the poll {pollData.title}</h1>)}
            {closed && (<h1>Poll {pollData.title} is closed</h1>)}

            {exists && !closed && (<button style={{color:"green"}} onClick={ () => handleVoting(1) }>Green</button>)}
            <br />

            {exists && !closed && (<button style={{color:"red"}} onClick={() => handleVoting(2)}>Red</button>)}
            {!exists && ((<h1>Poll not found with that link</h1>))}

        </div>
    );
};

export default Vote;