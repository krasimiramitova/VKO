import React from 'react';

function DailyTasks() {
    let Tasks = [
        {   
            "projectNumber":"087",
            "projectName":"Mashpee",
            "task":"markup",
            "designerName" : "Краси",
            "taskStatus":"complete",
            "taskWorkingHours":"6:45",
            "comments":"",
            "taskDeadline":"2022-04-19T12:00-00", 
        }, {
            "projectNumber":"2403",
            "projectName":"Provincetown",
            "task":"markup",
            "designerName" : "Биби",
            "taskStatus":"working",
            "taskWorkingHours":"6:45",
            "comments":"",
            "taskDeadline":"2022-04-19T12:00-00"
        }, {
            "projectNumber":"739",
            "projectName":"Warwick",
            "task":"markup",
            "designerName" : "Краси",
            "taskStatus":"working",
            "taskWorkingHours":"6:45",
            "comments":"",
            "taskDeadline":"2022-04-19T12:00-00"           
        }, {
            "projectNumber":"633",
            "projectName":"Milford",
            "task":"markup",
            "designerName" : "Краси",
            "taskStatus":"working",
            "taskWorkingHours":"6:45",
            "comments":"",
            "taskDeadline":"2022-04-19T12:00-00"           
        }, {
            "projectNumber":"652",
            "projectName":"Clinton",
            "task":"markup",
            "designerName" : "Биби",
            "taskStatus":"pending",
            "taskWorkingHours":"6:45",
            "comments":"",
            "taskDeadline":"2022-04-19T12:00-00"           
        }, {
            "projectNumber":"407",
            "projectName":"Saugus",
            "task":"markup",
            "designerName" : "Краси",
            "taskStatus":"pending",
            "taskWorkingHours":"6:45",
            "comments":"",
            "taskDeadline":"2022-04-19T12:00-00"
        }
    ] ;

    return (
        <div className="List" id = "projects" > 
            <table>
                <thead>
                    <tr>
                        <th> # </th>
                        <th> name </th>
                        <th> task </th>
                        <th> designer </th>
                        <th> status </th>
                        <th> working hours </th>
                        <th> comments </th>
                        <th> deadline </th>
                    </tr>
                </thead>
                <tbody>
                    { Tasks.map( (tk, i) => {
                        let autorised = "false";
                        let designer = "";
                        if ( tk.designerName ) {
                            designer = tk.designerName;
                        } else {
                            if (autorised == "true" ) {
                                designer = (
                                    <select>
                                        <option>Краси</option>
                                        <option>Биби</option>
                                        <option>Косе</option>
                                    </select>);
                            } 
                        }
                       
                        if  ( !tk.designerName && autorised == "true" ) 
                        {
                             designer = tk.designerName ;
                        }

                        return (
                            <tr key= {i}>
                                <td> {tk.projectNumber} </td>
                                <td> {tk.projectName} </td>
                                <td> {tk.task} </td>
                                <td> {designer} </td>
                                <td> {tk.taskStatus} </td>
                                <td> {tk.workingHours} </td>
                                <td> {tk.comments} </td>
                                <td> {tk.taskDeadline} </td>
                            </tr>
                        )}
                    )} 
                </tbody>
            </table>
        </div>
      );
}
export default DailyTasks;