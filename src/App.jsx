import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Polls from "./pages/polls.jsx";
import CreatePoll from "./pages/createPoll.jsx";

function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/polls' element={<Polls />}></Route>
                <Route path='/createPoll' element={<CreatePoll />}></Route>
            </Routes>
        </Router>
    )
}

export default App
