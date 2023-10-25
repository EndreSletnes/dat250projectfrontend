import PropTypes from "prop-types";
import './dynamicList.css'
import {Link} from "react-router-dom";

const DynamicList = (props) => {
    const items = props.items;

    return (
        <ul className="list">
            <li className="header">
                <div className="item">
                    <p>Title</p>
                    <p>Status</p>
                    <p>Created</p>
                    <p>Edit</p>
                </div>
            </li>
            {items.map((item, index) => (
                <li key={index}>
                    <div className="item">
                        <p>{item.title}</p>
                        <p>{item.status ? 'Open' : 'Closed'}</p>
                        <p>{item.creationTime.slice(0, 10)}</p>
                        <Link to="/editPoll" state={item}>Edit Poll</Link>
                    </div>
                </li>
            ))}
        </ul>
    );
}

DynamicList.propTypes = {
    items: PropTypes.array.isRequired,
}

export default DynamicList;