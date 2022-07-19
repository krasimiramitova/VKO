import React from "react";
import ShowWorkerTasks from "../../pages/Designers/Worker";
import "../../App.css";

function DesignersList() {
    let workers = [
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
    return (
        <div className="List" id = "workers" > 
            { workers.map( (wk) => {
                let Id = wk.designerId;
                console.log(Id);
                return (
                    <table>
                            <td className = {wk.status}> 
                                <button onClick={ShowWorkerTasks(Id)} className= {wk.status}> {wk.name} </button>
                            </td>
                         
                    </table>
                )}
            )}  
        </div>
      );
}

export default DesignersList;