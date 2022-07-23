import React from "react";
import DailyTasks from "../../components/Tasks/DailyTasks";
import SideMenu from "../../components/Nav/SideMenu";
import TabMenu from "../../components/Nav/TabsMenu";
import Card from "../../components/commons/Card";

function ManagerPage() {
  return (
    <div id="mainContent"> 
      <SideMenu/>
      <div className="Page"><Card>
        <TabMenu/>
      </Card></div>
    </div>
  );
}

export default ManagerPage;
