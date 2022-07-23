import React from "react";
import TabMenu from "../../../components/Nav/TabsMenu";
import SideMenu from "../../../components/Nav/SideMenu";
import Card from "../../../components/commons/Card";
import ManageDesignersTable from "../../../components/Designers/ManageDesignersTable";
import DesignersList from "../../../components/Designers/Designers";

function ManageDesignersPage(props) {
    return (
        <div> 
          <SideMenu/>
          <div className="Page">
            <TabMenu/>
            <div className="Manage">
              <Card>  
                <ManageDesignersTable/>
              </Card>
              <Card>  
                
              </Card>
            </div>
          </div>
    
        </div>
      );
}

export default ManageDesignersPage;