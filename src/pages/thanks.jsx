import UserDropDown from "../components/dropDown.jsx";


const Thanks = () => {
    return(
        <div>
            <h1>Thank you for voting on this poll!</h1>
            {localStorage.getItem("userId") !== null && (<UserDropDown></UserDropDown>)}

        </div>
    );
};

export default Thanks;