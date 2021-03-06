import React from "react";
import { NavLink } from "react-router-dom";

function MenuButton(props) {
 //   let act = "";
    return <NavLink to={props.href} 
    className = {({isActive}) => isActive? "Button" : "Button Menu" }  > 
    {props.children}         
    </NavLink>;
}

export default MenuButton;