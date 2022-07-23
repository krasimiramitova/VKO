import React from "react";
import Worker from "./Worker";
import DesignersList from "../../components/Designers/Designers";
import Card from "../../components/commons/Card";
import SideMenu from "../../components/Nav/SideMenu";
import { useState } from "react";

function DesignersPage() {
  let workersData = [
    {
        "designerId" : "1",
        "name":"Krasi",
        "status":"Unavailable"
    }, {
        "designerId" : "2",
        "name":"Kose",
        "status":"Busy"
    }, {
        "designerId" : "3",
        "name":"Val",
        "status":"Break"
    }, {
        "designerId" : "4",
        "name":"Bibi",
        "status":"Busy"
    }, {
        "designerId" : "5",
        "name":"Misha",
        "status":"Free"
    }, 
] ; 

  const [designer, setDesigner] = useState();
  
  let ChangeDesignerHandler = (desId) => {
    setDesigner (workersData.filter(key => {
      if (key.designerId === desId) {
        return key;
      }
    }));
  }

  return (
    <div>
      <SideMenu/>
      <div className="Page">
      <h1> Designers </h1>  
        <Card> 
          <DesignersList workers = {workersData} onClickEvent = {
            ChangeDesignerHandler
          }/>
        </Card>

        {designer && <Card className="page"> 
          <Worker data = {designer}/>
        </Card>}
      </div>
    </div>
  );
}

export default DesignersPage;
