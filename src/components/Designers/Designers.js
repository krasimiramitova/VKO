import React from "react";
import "../../App.css";

function DesignersList(props) {
    return (
        <div className="List" id = "workers" > 
            { props.workers.map(  (wk) => {
                let Id = wk.designerId;
                return (
                    <button key={Id} onClick={() => {props.onClickEvent(Id) } } className= {wk.status}> {wk.name} </button>
                )}
            )}  
        </div>
      );
}

export default DesignersList;