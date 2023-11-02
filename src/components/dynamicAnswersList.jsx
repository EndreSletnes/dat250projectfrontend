import PropTypes from "prop-types";
import './dynamicList.css'
import {Link} from "react-router-dom";

const DynamicAnswersList = (props) => {
    const items = props.items;

    return (
        <ul className="list">
            <li className="header">
                <div className="item">
                    <p>Color</p>
                    <p>User</p>
                    <p>Time Of Vote</p>
                </div>
            </li>
            {items.map((item, index) => (
                <li key={index}>
                    <div className="item">
                        <p>{item.color}</p>
                        <p>{item._user !== null ? item._user.userName : "Anonymous"}</p>
                        <p>{item.timeOfVote}</p>
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