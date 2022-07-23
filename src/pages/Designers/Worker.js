import React, { useContext, useEffect } from 'react';
import Moment from 'react-moment';
import { useState } from 'react';
import moment from 'moment';
import {useUserContext} from "../../contexts/UserContext";

function ShowWorkerTasks(props) {
    let designerTasksData = [
        {   
            "taskId" : "000",
            "designerId" : "1",
            "projectNumber":"087",
            "projectName":"Mashpee",
            "task":"markup",
            "taskStart":"07/22/2022, 2:57:12 pm",
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
    
    var sumWorkingHours = "";
    let designerId = props.data[0].designerId;

    let selectedDesignerTasks = designerTasksData.filter(task => {
          if (task.designerId === designerId) {
            return task;
        }
    })

    const {user, isLoggedIn} = useUserContext(); 

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
            <h2>{props.data[0].name} </h2>
            <table>
                <thead>
                    <tr>
                        <th className='num'> # </th>
                        <th className='prName'> name </th>
                        <th className='task'> task </th>
                        <th className='tkStart' > start </th>
                        <th className='tkEnd'> end </th>
                        <th className='tkHours'> working hours </th>
                        <th className='tkStatus'> status </th>
                        <th className='comment'> comments </th>
                        <th className='tkDeadLine'> deadline </th>
                    </tr>
                </thead>
                <tbody>
                    { designerTasks.map( (tk, i) => {
                        let end = "";
                        let workingHours = "";
                        let showStartButton = "";
                        if (isLoggedIn() && user.designerId === designerId) {
                            showStartButton = (<button onClick={() => {GetTimeStart(tk); } }> Start </button>); 
                        }
                        let showEndButton = "";
                        if (isLoggedIn() && user.designerId === designerId) {
                            showEndButton = (<button onClick={() => {GetTimeEnd(tk); } }> End </button>);
                        }
                        let start = ((tk.taskStatus == "pending"))? showStartButton : tk.taskStart;
                        tk.taskStatus == "working" && (end = showEndButton);
                        if (tk.taskStatus === "complete") {
                            end = tk.taskEnd;
                            let tempStart = moment(tk.taskStart);
                            let tempEnd = moment(tk.taskEnd);
                            let duration = moment.duration(tempEnd.diff(tempStart));
                            workingHours = duration.asHours().toFixed(2);
                            sumWorkingHours = sumWorkingHours + workingHours;
                        }

                        return (
                            <tr key= {i}>
                                <td className='num'> {tk.projectNumber} </td>
                                <td className='prName'> {tk.projectName} </td>
                                <td className='task'> {tk.task} </td>
                                <td className='tkStart'> {start} </td>
                                <td className='tkEnd'> {end} </td>
                                <td className='tkHours'> {workingHours} </td>
                                <td className='tkStatus'> {tk.taskStatus} </td>
                                <td className='comment'> {tk.comments} </td>
                                <td className='tkDeadLine' > {tk.taskDeadline} </td>
                            </tr>
                        )}
                    )}
                    
                        <tr>
                            <td id="total" colSpan={4}> total hours  </td>
                            <td className='tkHours'> {sumWorkingHours} </td>
                        </tr>
                                     
                </tbody>
            </table>
        </div>
      );
}
export default ShowWorkerTasks;