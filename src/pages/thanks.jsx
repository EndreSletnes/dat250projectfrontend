import CustomNavBar from "../components/navBar.jsx";


const Thanks = () => {
    return(
        <div>
            {localStorage.getItem("userId") !== null && (<CustomNavBar></CustomNavBar>)}
            <h1>Thank you for voting on this poll!</h1>


        </div>
    );
};

export default Thanks;