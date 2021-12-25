import logo from './logo.svg';
import './App.css';
import Home from "./components/Home/Home";
import LoginPage from './components/LoginPage/LoginPage';
import {Route, Routes,Navigate} from "react-router-dom";

function App() {
  return (
  <div>
      {/* <Routes>
        <Route path="/" exact element={<Navigate to="/welcome"/>}/>
        <Route path="/welcome" element={<LoginPage/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>   */}
        {
         (localStorage.getItem("users")==undefined ||  localStorage.getItem("users")== null)?
       <LoginPage/> : <Home/>
     }
  </div>
  );
}

export default App;
