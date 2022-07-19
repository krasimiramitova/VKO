import React from "react";
import ShowWorkerTasks from "../../pages/Designers/Worker";
import "../../App.css";

function DesignersList(props) {
    return (
        <div className="List" id = "workers" > 
            { props.workers.map(  (wk) => {
                let Id = wk.designerId;
                return (
                    <table key={Id} >
                        <tbody>
                        <tr>
                            <td className = {wk.status}> 
                                <button onClick={() => {props.onClickEvent(Id) } } className= {wk.status}> {wk.name} </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                )}
            )}  
        </div>
      );
}

export default DesignersList;