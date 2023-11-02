import DynamicList from "../components/dynamicList.jsx";
import {getAnswers, getPolls} from "../services/apiService.js";
import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import DynamicAnswersList from "../components/dynamicAnswersList.jsx";


const Answers = () => {
    const [answers, setAnswers] = useState([]);
    const [answersToShow, setAnswersToShow] = useState([]);
    const [dataIsFetched, setDataIsFetched] = useState(false);
    const { state }= useLocation();
    useEffect(() => {
        if (!dataIsFetched) {
            getAnswers(state.id).then(
                (data) => {
                    setAnswers(data);
                    setDataIsFetched(true);
                    setAnswersToShow(data);
                }
            )
        }
    }, [dataIsFetched, answers]);


    return (
        <div>
            <h1>Answers of the Poll {state.title}</h1>
            <DynamicAnswersList items={answersToShow}></DynamicAnswersList>
        </div>
    )
}

export default Answers;