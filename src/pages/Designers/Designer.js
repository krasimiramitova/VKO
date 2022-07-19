import React from "react";
import Worker from "./Worker";
import DesignersList from "../../components/Designers/Designers";
import Card from "../../components/commons/Card";
import { useState } from "react";



function DesignersPage() {
  let workersData = [
    {
        "designerId" : "1",
        "name":"Краси",
        "status":"Unavailable"
    }, {
        "designerId" : "2",
        "name":"Косе",
        "status":"Busy"
    }, {
        "designerId" : "3",
        "name":"Вал",
        "status":"Break"
    }, {
        "designerId" : "4",
        "name":"Биби",
        "status":"Busy"
    }, {
        "designerId" : "5",
        "name":"Мише",
        "status":"Free"
    }, 
] ; 

  const [designer, setDesigner] = useState();
  let ChangeDesignerHandler = (desId) => {
    setDesigner (workersData.filter(worker => {
      if (worker.designerId === desId) {
        return worker;
      }
    }));
  }

  return (
    <div id="">

      login form

      <Card> Designers 
        <DesignersList workers = {workersData} onClickEvent = {
          ChangeDesignerHandler
        }/>
      </Card>

      {designer && <Card> Designer tasks 
        <Worker data = {designer}/>
      </Card>}

    </div>
  );
}

export default DesignersPage;
