import React, {useState} from 'react';
import {auth, storage} from "../firebase";
const SignUp = () => {

    // constructor (props) {
    //     super(props);
    //     this.state= {
    //         emailId: null,
    //         name: null,
    //         userName: null,
    //         password: null
    //     }
    // }

    const [emailId, setEmailId] = useState("");
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const newSignUpHandler = () => {
        auth.createUserWithEmailAndPassword(emailId, password)
        .then((userCredential) => {
            var user = userCredential.user;
            let payload = {
                "userId":   user.uid,
                "userName": userName,
                "name": name,
                "profileImage": ""
            }
            const requestOptions = {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(payload),
            }
            fetch("http://localhost:8080/users", requestOptions)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("users",JSON.stringify(user));
                window.location.reload();
            })
            .catch(error => {

            })
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        })
    }


    // render() {
        return (
            <div>
            <input className="login-text" onChange ={(event) => {setEmailId(event.currentTarget.value)}} type ="text" placeholder="Phone number, username, or email"/>
            <input className="login-text" onChange ={(event) => {setName(event.currentTarget.value)}} type ="text" placeholder="Full Name"/>
            <input className="login-text" onChange ={(event) => {setUserName(event.currentTarget.value)}}type ="text" placeholder="Username"/>
            <input className="login-text" onChange ={(event) => {setPassword(event.currentTarget.value)}}type ="password" placeholder="Password"/>
            <button className="login-button" onClick={newSignUpHandler}>Sign Up</button>
        </div>   
        )
    // }
}

export default SignUp;