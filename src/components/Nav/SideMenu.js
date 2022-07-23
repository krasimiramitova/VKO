import React from "react";
import MenuButton from "./Button";
import {useUserContext} from "../../contexts/UserContext";


function SideMenu() {
const {user, isLoggedIn} = useUserContext();
return (
    <div id = "SideMenu">
      <ul>
        <li><MenuButton href="/Projects"  id = 'projectBut'> PROJECTS </MenuButton></li>
        <li><MenuButton href="/Manager"  id = 'managerBut'> MANAGER </MenuButton></li>
        <li><MenuButton href="/Designers"  id = 'designerBut'> DESIGNERS </MenuButton></li>
        <li><MenuButton href="/"  id = 'HomeBut'> HOME </MenuButton></li>
        { !isLoggedIn() &&
        <li><MenuButton href="/Login"  id = 'LoginBut'> LOGIN </MenuButton></li>
        }        
        { isLoggedIn() && 
        <li><MenuButton href="/Logout"  id = 'LogoutBut'> LOGOUT </MenuButton></li> 
        }
      </ul>
    </div>
  );
}

export default SideMenu;
