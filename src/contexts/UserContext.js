import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = (props) => {
    let navigate = useNavigate();
    const [user, setUser] = useState(null);
    const onLogin = (tempUser) => {
        setUser(tempUser);
        console.log(tempUser.role);
        if (isLoggedIn() && (tempUser.role === "user")) {  
            navigate("/Designers");
            console.log("role user");
        } else {
            console.log("role admin", isLoggedIn(), tempUser.role);
            navigate("/Manager"); 
        }       
    }

    const onLogout = () => {
        setUser(null);
    }

    const isLoggedIn = () => {
        return !!user;
    }

    return (
        <UserContext.Provider value={{
            "onLogin": onLogin,
            "onLogout": onLogout,
            "isLoggedIn": isLoggedIn,
            "user":user
        }}>
            {props.children}
        </UserContext.Provider >
    );
}
