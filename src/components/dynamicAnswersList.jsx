import PropTypes from "prop-types";
import './dynamicAnswersList.css'
import {Link} from "react-router-dom";

const DynamicAnswersList = (props) => {
    const items = props.items;

    return (
        <ul className="list">
            <li className="header">
                <div className="answersItem">
                    <p>Color</p>
                    <p>User</p>
                    <p>Time Of Vote</p>
                </div>
            </li>
            {items.map((item, index) => (
                <li key={index}>
                    <div className="answersItem">
                        <p style={{color:item.color === 1 ? "green" : "red"}}>&#9632;</p>
                        <p>{item._user !== null ? item._user.userName : "Anonymous"}</p>
                        <p>{item.timeOfVote.slice(0, 10)}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

DynamicAnswersList.propTypes = {
    items: PropTypes.array.isRequired,
}

export default DynamicAnswersList;