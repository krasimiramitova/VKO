import React from "react";
import { useEffect, useState } from "react";

function DailyTable(props) {
    let projectData = [
        {   
            "projectTaskId":"1",
            "projectNumber":"087",
            "projectStage":"as-built",
            "task":"update",
            "designer":"KM",
            "taskStatus":"complete",
            "taskStart":"01/01/21 10:30",
            "taskEnd":"01/02/21 9:15",
            "taskDeadline":"07/24/21 14:00",       
            "taskWorkingHours":"6:45",
            "comments":"",
        }, {
            "projectTaskId":"2",
            "projectNumber":"087",
            "projectStage":"IP",
            "task":"cad modelling",
            "designer":"KM",
            "taskStatus":"complete",
            "taskStart":"01/02/21 10:30",
            "taskEnd":"01/02/21 10:30",
            "taskDeadline":"07/24/21 10:30",       
            "taskWorkingHours":"6:45",
            "comments":"",
        }, {
            "projectTaskId":"3",
            "projectNumber":"633",
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
            "projectTaskId":"4",
            "projectNumber":"087",
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
            "projectTaskId":"5",
            "projectNumber":"633",
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
            "projectTaskId":"6",
            "projectNumber":"2403",
            "projectStage":"r2",
            "task":"",
            "designer":"KM",
            "taskStatus":"complete",
            "taskStart":"01/02/21 10:30",
            "taskEnd":"01/02/21 10:30",
            "taskDeadline":"02/02/21 10:30",       
            "taskWorkingHours":"6:45",
            "comments":"",
        }, {
            "projectTaskId":"7",
            "projectNumber":"087",
            "projectStage":"r3",
            "task":"",
            "designer":"BY",
            "taskStatus":"working",
            "taskStart":"01/02/21 10:30",
            "taskEnd":"",
            "taskDeadline":"01/02/21 10:30",       
            "taskWorkingHours":"",
            "comments":"",
        }, {
            "projectTaskId":"8",
            "projectNumber":"633",
            "projectStage":"matrixR3",
            "task":"",
            "designer":"BY",
            "taskStatus":"pending",
            "taskStart":"",
            "taskEnd":"",
            "taskDeadline":"01/02/21 10:30",       
            "taskWorkingHours":"",
            "comments":"",
        }
    ] ;

    let sortTableByWorkingHours = function(){
        const [toDo, setToDo] = useState(projectData);
        {toDo.sort( 
         (a,b) => a.projectData.taskWorkingHours > b.projectData.taskWorkingHours ? 1 : -1)
            console.log(toDo);
        }

        { projectData.map( (tk, i) => {
            return (
                <tr key= {i}>
                    <td className="prNumber"> {tk.projectNumber} </td>
                    <td className="prStage"> {tk.projectStage} </td>
                    <td className="task"> {tk.task} </td>
                    <td className="tkDesigner"> {tk.designer} </td>
                    <td className="tkStatus"> {tk.taskStatus} </td>
                    <td className="tkStart"> {tk.taskStart} </td>
                    <td className="tkEnd"> {tk.taskEnd} </td>
                    <td className="tkDeadLine"> {tk.taskDeadline} </td>
                    <td className="prHours"> {tk.taskWorkingHours} </td>
                    <td className="comment"> {tk.comments} </td>
                </tr>
            )}
        )}  
        
    }
    

/*   let selectedProject = projectData.filter(project => {
        if (project.projectNumber === props.data[0].projectNumber) {
          return project;
      }
    })

 // const userCxt = useContext(UserContext);

    const [project, setProject] = useState(selectedProject);
    useEffect(() => {
        setProject(selectedProject);
    }, [props.data]) 

*/
    return (
        <div className="List" id = "project" > 
            <table>
                <thead>
                    <tr>
                        <th className="prStage"> # </th>
                        <th className="prStage"> stage </th>
                        <th className="task"> task </th>
                        <th className="tkDesigner"> designer </th>
                        <th className="tkStatus"> status </th>
                        <th className="tkStart"> start </th>
                        <th className="tkEnd"> end </th>
                        <th className="tkDeadLine"> deadline </th>
                        <th className="prHours"> working hours </th>
                        <th className="comment"> comments </th>
                    </tr>
                </thead>
                <tbody>

                    { projectData.map( (tk, i) => {
                        return (
                            <tr key= {i}>
                                <td className="prNumber"> {tk.projectNumber} </td>
                                <td className="prStage"> {tk.projectStage} </td>
                                <td className="task"> {tk.task} </td>
                                <td className="tkDesigner"> {tk.designer} </td>
                                <td className="tkStatus"> {tk.taskStatus} </td>
                                <td className="tkStart"> {tk.taskStart} </td>
                                <td className="tkEnd"> {tk.taskEnd} </td>
                                <td className="tkDeadLine"> {tk.taskDeadline} </td>
                                <td className="prHours"> {tk.taskWorkingHours} </td>
                                <td className="comment"> {tk.comments} </td>
                            </tr>
                        )}
                    )}  
                </tbody>
            </table>
        </div>
    );
}

export default DailyTable; 