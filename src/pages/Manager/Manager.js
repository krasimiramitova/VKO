import React from "react";
import DailyTasks from "../../components/Tasks/DailyTasks";

function ManagerPage() {
  return (
    <div id="dayTasks"> 
      <div> {DailyTasks} </div>
      <div> Client Flows </div>
      <div> Designers Flows </div>   
    </div>
  );
}

export default ManagerPage;
