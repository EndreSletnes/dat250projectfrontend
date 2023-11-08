import PropTypes from "prop-types";
import './dynamicList.css'
import {Link} from "react-router-dom";
import {sharePoll} from "../services/apiService.js";
import {createElement, useState} from "react";

const DynamicList = (props) => {
    const items = props.items;
    const handleSharing = async(pollId,e) => {
        const data = await sharePoll(pollId);
        if(data !== false){
            e.target.nextSibling.textContent = "http://localhost:5173/vote/"+data.link;
            e.target.nextSibling.href = "http://localhost:5173/vote/"+data.link;
            e.target.nextSibling.hidden = false;
        }
        else{
        }
    }
    return (
        <ul className="list">
            <li className="header">
                <div className="item">
                    <p>Title</p>
                    <p>Status</p>
                    <p>Created</p>
                    <p>Edit</p>
                    <p>Green Answers</p>
                    <p>Red Answers</p>
                </div>
            </li>
            {items.map((item, index) => (
                <li key={index}>
                    <div className="item">
                        <p>{item.title}</p>
                        <p>{item.status ? 'Open' : 'Closed'}</p>
                        <p>{item.creationTime.slice(0, 10)}</p>
                        <Link to="/editPoll" state={item}>Edit Poll</Link>
                        <p>{item.answers.filter(x => x.color === 1).length}</p>
                        <p>{item.answers.filter(x => x.color === 2).length}</p>
                        <Link to="/answers" state={item}>See Answers</Link>
                        <button onClick={(e) => handleSharing(item.id,e)}>Share Poll</button>
                        <span hidden={true}></span>
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