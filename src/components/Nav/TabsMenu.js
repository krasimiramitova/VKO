import React from "react";
import TabButton from "./Tab";
import { useUserContext } from "../../contexts/UserContext";


function TabMenu() {


  return (
    <div className = "List" id = "TabMenu">
      <TabButton href="/Manager/Daily"  id = 'dailyTab'> DAILY TASKS </TabButton>
      <TabButton href='/Manager/Designers'  id = 'designerTab'> DESIGNERS </TabButton>
      <TabButton href='/Manager/Client'  id = 'clientTab'> CLIENT </TabButton>
    </div>
  );
}

export default TabMenu;
