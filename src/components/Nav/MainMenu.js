import React from "react";
import MenuButton from "./Button";


function MainMenu() {


  return (
    <div id = "MainMenu">
      <MenuButton href="./Projects"  id = 'projectBut'> PROJECTS </MenuButton>
      <MenuButton href="./Manager"  id = 'managerBut'> MANAGER </MenuButton>
      <MenuButton href="./Designers"  id = 'designerBut'> DESIGNERS </MenuButton>
      <MenuButton href="./"  id = 'HomeBut'> HOME </MenuButton>
    </div>
  );
}

export default MainMenu;
