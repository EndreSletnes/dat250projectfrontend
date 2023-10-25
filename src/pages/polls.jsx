import DynamicList from "../components/dynamicList.jsx";
import {getPolls} from "../services/apiService.js";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


const Polls = () => {
    const [polls, setPolls] = useState([]);
    const [titleSearch, setTitleSearch] = useState('');

    useEffect(() => {
        getPolls(1).then(
            (data) => {
                setPolls(data);
            }
        )
    }, []);

    return (
        <div>
            <h1>Your Polls</h1>
            <div className="searchBar">
                <label htmlFor="titleSearch">Search: </label>
                <input
                    type="text"
                    id="titleSearch"
                    name="titleSearch"
                    value={titleSearch}
                    onChange={(event) => {setTitleSearch(event.target.value);}}
                />
                <input
                    type="checkbox"
                    id="openCheckbox"
                />
                <label htmlFor="myCheckBox">Open</label>
                <input
                    type="checkbox"
                    id="closedCheckbox"
                />
                <label htmlFor="myCheckBox">Closed</label>
                <Link to={'/createPoll'}>Create new poll</Link>
            </div>
            <DynamicList items={polls}></DynamicList>
        </div>
    )
}

export default Polls;