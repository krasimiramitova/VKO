import React from "react";
import { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { useNavigate } from 'react-router-dom';

function LoginForm(props) {
    let usersData = [
        {
            "designerId" : "1",
            "name":"Krasi",
            "role":"user",
            "password":"1234"
        }, {
            "designerId" : "2",
            "name":"Kose",
            "role":"user",
            "password":"2345"
        }, {
            "designerId" : "3",
            "name":"Val",
            "role":"admin",
            "password":"3456"
        }, {
            "designerId" : "4",
            "name":"Bibi",
            "role":"user",
            "password":"4567"
        }, {
            "designerId" : "5",
            "name":"Misha",
            "role":"user",
            "password":"5678"
        }, 
    ] ; 
    
    const [userName, setUserName] = useState("");
    const [password, setUserPassword] = useState("");
    const {onLogin, onLogout} = useUserContext();

    function setUserNameHandler(e) {
        setUserName(e.target.value);
    }
    
    function setUserPasswordHandler(e) {
        setUserPassword(e.target.value);
    }

    function SubmitHandler(e) { 
        e.preventDefault();
        e.stopPropagation(); 
        let user = null;
        usersData.map(tempUser => { 
            if ( tempUser.name === userName && tempUser.password === password ) {
                user = tempUser;
            }
        })
        if (!!user) {
            onLogin(user); 
        } else {
            onLogout();
        }
    }

    return (
        <div>
            <form onSubmit={SubmitHandler}>
                <input className="blank" onChange={setUserNameHandler} value={userName} type={"text"} />
                <input className="blank" onChange={setUserPasswordHandler} value={password} type={"password"} />
                <input className = "Button Menu" type={"submit"} value="LOGIN"
                />
            </form>
        </div>
    )
}

export default LoginForm;