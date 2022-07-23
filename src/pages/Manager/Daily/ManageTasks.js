import React from "react";
import TabMenu from "../../../components/Nav/TabsMenu";
import SideMenu from "../../../components/Nav/SideMenu";
import Card from "../../../components/commons/Card";
import DailyTable from "../../../components/Designers/DailyTable";
import DesignersList from "../../../components/Designers/Designers";

function ManageTasksPage(props) {
    return (
        <div> 
          <SideMenu/>
          <div className="Page">
            <TabMenu/>
            <div className="Manage">
              <Card>  
                <DailyTable/>
              </Card>
  

            </div>
          </div>
    
        </div>
      );
}

export default ManageTasksPage;