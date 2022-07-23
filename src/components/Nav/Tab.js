import React from "react";
import { NavLink } from "react-router-dom";

function TabButton(props) {
 //   let act = "";
    return <NavLink to={props.href} 
    className = {({isActive}) => isActive? "TabButton": "WhiteTab"  }  > 
    {props.children}         
    </NavLink>;
}

export default TabButton;