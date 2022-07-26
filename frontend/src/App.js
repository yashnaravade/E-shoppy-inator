import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './Component/Homepage/Homepage';
import Login from './Auth/Login/Login';
import Signup from './Auth/Signup/Signup';

function App() {
  return (
    <div  className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
