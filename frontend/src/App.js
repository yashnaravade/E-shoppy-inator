import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './Component/Homepage/Homepage';
import Login from './Auth/Login/Login';
import Signup from './Auth/Signup/Signup';
import Mobile from "./Component/Mobile/Mobile"
import Fetch from "./Component/Fetch/Fetch"


function App() {
  return (
    <div  className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/register" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/mobile" element={<Mobile/>}/>
        <Route path="/fetch" element={<Fetch/>}/>
      

        <Route path="/logout" element={<h1> Logout Product Component </h1>}/>
      </Routes>
      </BrowserRouter>
  
      {/* <Mobile/> */}

      {/* <Homepage/> */}
    </div>
  );
}

export default App;
