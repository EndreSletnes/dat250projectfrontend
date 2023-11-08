import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {getPoll, vote} from "../services/apiService.js";
import {useEffect, useState} from "react";


const Vote = () => {
    const { state }= useLocation();
    const navigate = useNavigate();
    let { link } = useParams();
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
                    if(data.publicPoll === false && localStorage.getItem("userId") === null){
                        navigate('/');
                    }
                    else{
                        setPollData(data);console.log(data);
                        setDataIsFetched(true);
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
            <h1>Vote on the poll {pollData.title}</h1>

            <button style={{color:"green"}} onClick={ () => handleVoting(1) }>Green</button>
            <br />
            <button style={{color:"red"}} onClick={() => handleVoting(2)}>Red</button>
        </div>
    );
};

export default Vote;