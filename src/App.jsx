import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Polls from "./pages/polls.jsx";
import CreatePoll from "./pages/createPoll.jsx";
import EditPoll from "./pages/editPoll.jsx";
import Answers from "./pages/answers.jsx";
import Vote from "./pages/vote.jsx";
import Thanks from "./pages/thanks.jsx";
import EditUser from "./pages/editUser.jsx";

function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/polls' element={<Polls />}></Route>
                <Route path='/createPoll' element={<CreatePoll />}></Route>
                <Route path='/editPoll' element={<EditPoll />}></Route>
                <Route path='/answers' element={<Answers />}></Route>
                <Route path='/vote/:link' element={<Vote />}></Route>
                <Route path='/thanks' element={<Thanks />}></Route>
                <Route path='/editUser' element={<EditUser />}></Route>
            </Routes>
        </Router>
    )
}

export default App
