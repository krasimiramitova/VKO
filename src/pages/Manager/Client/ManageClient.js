import React from "react";
import TabMenu from "../../../components/Nav/TabsMenu";
import SideMenu from "../../../components/Nav/SideMenu";
import Card from "../../../components/commons/Card";
import ManageClientsTable from "../../../components/client/ManageClientsTable";

function ManageClientsPage(props) {
    return (
        <div> 
          <SideMenu/>
          <div className="Page">
            <TabMenu/>
            <div className="Manage">
              <Card>  
                <ManageClientsTable/>
              </Card>
            </div>
          </div>
    
        </div>
      );
}

export default ManageClientsPage;