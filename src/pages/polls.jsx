import DynamicList from "../components/dynamicList.jsx";
import {getPolls} from "../services/apiService.js";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


const Polls = () => {
    const [polls, setPolls] = useState([]);
    const [titleSearch, setTitleSearch] = useState('');
    const [openBox, setOpenBox] = useState(false);
    const [closeBox, setCloseBox] = useState(false);

    useEffect(() => {
        getPolls(1).then(
            (data) => {
                setPolls(data);
                let newlist = data;
                if(titleSearch!==''){
                    newlist = data.filter(value => value.title.toLowerCase().includes(titleSearch.toLowerCase()))
                }
                if(openBox === true && closeBox === false){
                    newlist = newlist.filter(value => value.status === true)
                }
                else if(openBox === false && closeBox === true){
                    newlist = newlist.filter(value => value.status === false)
                }
                setPolls(newlist)

            }

        )

    }, [titleSearch, openBox, closeBox]);


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
            <DynamicList items={polls}></DynamicList>
        </div>
    )
}

export default Polls;