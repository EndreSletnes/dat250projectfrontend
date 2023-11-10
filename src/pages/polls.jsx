import DynamicList from "../components/dynamicList.jsx";
import {getPolls} from "../services/apiService.js";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import UserDropDown from "../components/dropDown.jsx";


const Polls = () => {
    const navigate = useNavigate();
    const [polls, setPolls] = useState([]);
    const [pollsToShow, setPollsToShow] = useState([]);
    const [titleSearch, setTitleSearch] = useState('');
    const [openBox, setOpenBox] = useState(false);
    const [closeBox, setCloseBox] = useState(false);
    const [dataIsFetched, setDataIsFetched] = useState(false);

    useEffect(() => {
        if (!dataIsFetched) {
            getPolls(localStorage.getItem("userId")).then(
                (data) => {
                    if(data !== false){
                        setPolls(data);
                        setDataIsFetched(true);
                        setPollsToShow(data);
                    }
                    else{
                        navigate('/');
                    }

                }
            )
        } else {
            let newList = polls;
            if (titleSearch !== '') {
                newList = newList.filter((value) => value.title.toLowerCase().includes(titleSearch.toLowerCase()));
            }
            if (openBox === true && closeBox === false) {
                newList = newList.filter((value) => value.status === true);
            } else if (openBox === false && closeBox === true) {
                newList = newList.filter((value) => value.status === false);
            }
            setPollsToShow(newList);
        }
    }, [titleSearch, openBox, closeBox, dataIsFetched, polls]);


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
                    onChange={(event) => {setOpenBox(event.target.checked)}}
                />
                <label htmlFor="myCheckBox">Open</label>
                <input
                    type="checkbox"
                    id="closedCheckbox"
                    onChange={(event) => {setCloseBox(event.target.checked)}}
                />
                <label htmlFor="myCheckBox">Closed</label>
                <Link to={'/createPoll'}>Create new poll</Link>
            </div>
            <DynamicList items={pollsToShow}></DynamicList>
            <UserDropDown></UserDropDown>
        </div>
    )
}

export default Polls;