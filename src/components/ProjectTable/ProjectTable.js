import React from "react";
function ProjectTable() {
    let projectTasks = [
        {
            "projectStage":"as-built",
            "task":"update",
            "designer":"KM",
            "taskStatus":"complete",
            "taskStart":"01/01/21 10:30",
            "taskEnd":"01/02/21 9:15",
            "taskDeadline":"01/02/21 14:00",       
            "taskWorkingHours":"6:45",
            "comments":"",
        }, {
            "projectStage":"IP",
            "task":"cad modelling",
            "designer":"KM",
            "taskStatus":"complete",
            "taskStart":"01/02/21 10:30",
            "taskEnd":"01/02/21 10:30",
            "taskDeadline":"01/02/21 10:30",       
            "taskWorkingHours":"6:45",
            "comments":"",
        }, {
            "projectStage":"IP",
            "task":"markup",
            "designer":"VK",
            "taskStatus":"complete",
            "taskStart":"01/02/21 10:30",
            "taskEnd":"01/02/21 10:30",
            "taskDeadline":"01/02/21 10:30",       
            "taskWorkingHours":"6:45",
            "comments":"",
        }, {
            "projectStage":"L4",
            "task":"",
            "designer":"VK",
            "taskStatus":"complete",
            "taskStart":"01/02/21 10:30",
            "taskEnd":"01/02/21 10:30",
            "taskDeadline":"01/02/21 10:30",       
            "taskWorkingHours":"6:45",
            "comments":"",
        }, {
            "projectStage":"r1",
            "task":"",
            "designer":"KM",
            "taskStatus":"complete",
            "taskStart":"01/02/21 10:30",
            "taskEnd":"01/02/21 10:30",
            "taskDeadline":"01/02/21 10:30",       
            "taskWorkingHours":"6:45",
            "comments":"",
        }, {
            "projectStage":"r2",
            "task":"",
            "designer":"KM",
            "taskStatus":"complete",
            "taskStart":"01-02-2021",
            "taskEnd":"02-02-2021",
            "taskDeadline":"02/02/21 10:30",       
            "taskWorkingHours":"6:45",
            "comments":"",
        }, {
            "projectStage":"r3",
            "task":"",
            "designer":"BY",
            "taskStatus":"working",
            "taskStart":"01-02-2021 10:30",
            "taskEnd":"01-02-2021 10:30",
            "taskDeadline":"01/02/21 10:30",       
            "taskWorkingHours":"6:45",
            "comments":"",
        }, {
            "projectStage":"matrixR3",
            "task":"",
            "designer":"BY",
            "taskStatus":"pending",
            "taskStart":"",
            "taskEnd":"10",
            "taskDeadline":"01/02/21 10:30",       
            "taskWorkingHours":"6:45",
            "comments":"",
        }
    ] ;
    return (
        <div className="List" id = "project" > 
            <table>
                <thead>
                    <tr>
                        <th> stage </th>
                        <th> task </th>
                        <th> designer </th>
                        <th> status </th>
                        <th> start </th>
                        <th> end </th>
                        <th> deadline </th>
                        <th> working hours </th>
                        <th> comments </th>
                    </tr>
                </thead>
                <tbody>
                    { projectTasks.map( (tk, i) => {
                        return (
                            <tr key= {i}>
                                <td> {tk.projectStage} </td>
                                <td> {tk.task} </td>
                                <td> {tk.designer} </td>
                                <td> {tk.taskStatus} </td>
                                <td> {tk.taskStart} </td>
                                <td> {tk.taskEnd} </td>
                                <td> {tk.taskDeadline} </td>
                                <td> {tk.taskWorkingHours} </td>
                                <td> {tk.comments} </td>
                            </tr>
                        )}
                    )}  
                </tbody>
            </table>
        </div>
      );
}

export default ProjectTable; 