import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './Component/Homepage/Homepage';
import Login from './Auth/Login/Login';
import Signup from './Auth/Signup/Signup';
import Mobile from "./Component/Mobile/Mobile"
import Fetch from "./Component/Fetch/Fetch"
import Book from './Component/Book/Book';
import Fetchbook from './Component/Book/Fetchbook'
import Sport from './Component/Sport/Sport'
import Fetchsport from './Component/Sport/Fetchsport'


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
        <Route path="/book" element={<Book/>} />
        <Route path="/fetchbook" element={<Fetchbook/>} />
        <Route path="/sport" element={<Sport/>} />
        <Route path="/fetchsport" element={<Fetchsport/>} />

      

        <Route path="/logout" element={<h1> Logout Product Component </h1>}/>
      </Routes>
      </BrowserRouter>
  
      {/* <Mobile/> */}

      {/* <Homepage/> */}
    </div>
  );
}

export default App;
