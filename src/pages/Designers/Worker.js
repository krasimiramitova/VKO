import React, { useEffect } from 'react';
import Moment from 'react-moment';
import { useState } from 'react';
import moment from 'moment';

function ShowWorkerTasks(props) {
    let designerTasksData = [
        {   
            "taskId" : "000",
            "designerId" : "1",
            "projectNumber":"087",
            "projectName":"Mashpee",
            "task":"markup",
            "taskStart":"06/19/2022, 5:57:12 pm",
            "taskEnd":"",
            "taskWorkingHours":"",
            "taskStatus":"working",
            "comments":"",
            "taskDeadline":"07/24/2022, 11:00:00 am", 
        }, {
            
            "taskId" : "001",
            "designerId" : "2",
            "projectNumber":"2403",
            "projectName":"Provincetown",
            "task":"markup",
            "taskStart":"",
            "taskEnd":"",
            "taskWorkingHours":"",
            "taskStatus":"pending",
            "comments":"",
            "taskDeadline":"07/24/2022, 11:00:00 am"
        }, {
            
            "taskId" : "002",
            "designerId" : "1",
            "projectNumber":"739",
            "projectName":"Warwick",
            "task":"markup",
            "taskStart":"",
            "taskEnd":"",
            "taskWorkingHours":"6:45",
            "taskStatus":"pending",
            "comments":"",
            "taskDeadline":"07/24/2022, 11:00:00 am"           
        }, {
            
            "taskId" : "003",
            "designerId" : "1",
            "projectNumber":"633",
            "projectName":"Milford",
            "task":"markup",
            "taskStart":"",
            "taskEnd":"",
            "taskWorkingHours":"6:45",
            "taskStatus":"pending",
            "comments":"",
            "taskDeadline":"07/24/2022, 11:00:00 am"           
        }, {
            
            "taskId" : "004",
            "designerId" : "2",
            "projectNumber":"652",
            "projectName":"Clinton",
            "task":"markup",
            "taskStart":"",
            "taskEnd":"",
            "taskWorkingHours":"6:45",
            "taskStatus":"pending",
            "comments":"",
            "taskDeadline":"07/24/2022, 11:00:00 am"           
        }, {
            
            "taskId" : "005",
            "designerId" : "1",
            "projectNumber":"407",
            "projectName":"Saugus",
            "task":"markup",
            "taskStart":"",
            "taskEnd":"",
            "taskWorkingHours":"6:45",
            "taskStatus":"pending",
            "comments":"",
            "taskDeadline":"07/24/2022, 11:00:00 am"
        }
    ] ;
    let selectedDesignerTasks = designerTasksData.filter(task => {
          if (task.designerId === props.data[0].designerId) {
            return task;
        }
    })
    const [designerTasks, setDesignerTasks] = useState(selectedDesignerTasks);
    useEffect(() => {
        setDesignerTasks(selectedDesignerTasks);
    }, [props.data]) 

    let GetTimeStart = function(task) {
        let tempDesignerTasks = designerTasks.map(tempTask => {
            if (tempTask.taskId === task.taskId) {
                tempTask.taskStart = moment().format("MM/DD/YYYY, h:mm:ss a");
                tempTask.taskStatus = "working";
            }
            return tempTask;
        })
        setDesignerTasks(tempDesignerTasks);
    }

    let GetTimeEnd = function(task) {
        let tempDesignerTasks = designerTasks.map(tempTask => {
            if (tempTask.taskId === task.taskId) {
                tempTask.taskEnd = moment().format("MM/DD/YYYY, h:mm:ss a");
                tempTask.taskStatus = "complete";
            }
            return tempTask;
        })
        setDesignerTasks(tempDesignerTasks);
    }


    return (
        <div className="List" id = "projects" > 
            <table>
                <thead>
                    <tr>
                        <th> # </th>
                        <th> name </th>
                        <th> task </th>
                        <th> start </th>
                        <th> end </th>
                        <th> working hours </th>
                        <th> status </th>
                        <th> comments </th>
                        <th> deadline </th>
                    </tr>
                </thead>
                <tbody>
                    { designerTasks.map( (tk, i) => {
                        let end = "";
                        let workingHours = "";
                        //let sumWorkingHours = "";
                        let showStartButton = (<button onClick={() => {GetTimeStart(tk); } }> Start </button>); 
                        let showEndButton = (<button onClick={() => {GetTimeEnd(tk); } }> End </button>);
                        let start = (tk.taskStatus == "pending")? showStartButton : tk.taskStart;
                        (tk.taskStatus == "working") && (end = showEndButton);
                        if (tk.taskStatus === "complete") {
                            end = tk.taskEnd;
                            workingHours = <Moment diff={start} unit="hours" decimal>{end}</Moment>;                    
                        }
                    
                        console.log(workingHours);
                        return (
                            <tr key= {i}>
                                <td> {tk.projectNumber} </td>
                                <td> {tk.projectName} </td>
                                <td> {tk.task} </td>
                                <td> {start} </td>
                                <td> {end} </td>
                                <td> {workingHours} </td>
                                <td> {tk.taskStatus} </td>
                                <td> {tk.comments} </td>
                                <td> {tk.taskDeadline} </td>
                            </tr>
                        )}
                    )} 
                                         
                            <tr>
                                <td colSpan="4"> total </td>
                                <td> total </td>
                                <td> all  </td>
                            </tr>
                    
                </tbody>
            </table>
        </div>
      );
}
export default ShowWorkerTasks;