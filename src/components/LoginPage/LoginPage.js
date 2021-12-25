import React, {useState} from 'react';
import { Grid } from '@material-ui/core';
import fb from "../../assets/images/fb.png";
import ios from "../../assets/images/appstore.png";
import android from "../../assets/images/googleplay.png";
import logoinsta from "../../assets/images/logoinsta.png";
import { Link } from 'react-router-dom';
import "./LoginPage.css";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
const LoginPage = () => {
    // const [account, setAccount] = useState("");
    // const [password, setPassword] = useState("");

    // const submitFormHandler = (e) => {
    //     e.preventDefault();
    // }

    // const accountHandler =(e) => {
    //     setAccount(e.target.value);
    // }

    // const passwordHandler =(e) => {
    //     setPassword(e.target.value);
    // }
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const changeLogInHandler = () => {
        if(isLoggedIn){
            setIsLoggedIn(false);
        }else {
            setIsLoggedIn(true);
        }
    }

    // const SubmitButtonHandler = () => {
    //     if(account.trim().length > 5 && password.trim().length > 5) {
    //         return (
    //         <Link to="/home"> 
    //             <button className="login-button">
    //                 Log In 
    //             </button>
    //         </Link>  
    //         )
    //     }else{
    //         return(
    //         <button className="login-button">
    //             Log In 
    //         </button> 
    //         )
    //     }
    // }
    return (
        <div>
        <Grid container>
            {/* <Grid item xs={1}>
                
            </Grid> */}
         
            <Grid item xs={6}>
                <div className="login-container">
                  
                    <div> 
                    <div className="login-main">
                         <img src={logoinsta} className="logo-insta" alt="logo" />
                         <div className="login-form">
                           
                                        {
                                           isLoggedIn ? <Login/> : <SignUp/>
                                       }
                                <div className="login-ordiv">
                                    <div className="login-lineor"></div>
                                    <div className="login-or">OR</div>
                                    <div className="login-lineor"></div>
                                </div>   
                                <div className="login-facebook"><img src={fb} className="logo-facebook" alt="face"/>   Log in with Facebook</div>
                                <div className="login-forgot">Forgot password?</div> 
                            </div>
                    </div>       
                      
                        <div className='signup'>
                    {
                    isLoggedIn ? 
                     <div className="signup-option">
                         Don't have an account? <span onClick={changeLogInHandler} style={{fontWeight:"bold",color: "rgb(24, 149, 246)",cursor:"pointer"}}>Sign up</span> 
                     </div> : 
                      <div className="loginPage__signup">
                           Have an account? <span onClick={changeLogInHandler}  style={{fontWeight:"bold", color:"#0395F6", cursor: "pointer"}}>Sign in</span>
                    </div>
                         }  
                        </div>
                        
                        <div className="login-app">
                            Get the app.
                        </div>      
                        <div className="logo-download">
                            <img src={ios} className="logo-appstore" alt="ios"/>
                            <img src={android} className="logo-googleplay" alt="android"/>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={3}>

            </Grid>
        </Grid>
    </div>
    )
}

export default LoginPage;
