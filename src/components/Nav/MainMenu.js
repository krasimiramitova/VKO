import React from "react";
import MenuButton from "./Button";


function MainMenu() {

  return (
    <div className = "MainMenu">
      <MenuButton href="/Projects"  id = 'projectBut'> PROJECTS </MenuButton>
      <MenuButton href="/Manager"  id = 'managerBut'> MANAGER </MenuButton>
      <MenuButton href="/Designers"  id = 'designerBut'> DESIGNERS </MenuButton>
    </div>
  );
}

export default MainMenu;
