import React from 'react';
import Moment from 'react-moment';
import GetTime from '../../components/commons/GetTime';

function ShowWorkerTasks() {
    let designerTasks = [
        {   
            "designerId" : "1",
            "projectNumber":"087",
            "projectName":"Mashpee",
            "task":"markup",
            "taskStart":"2022-04-19T12:00-00",
            "taskEnd":"2022-04-19T13:45-00",
            "taskWorkingHours":"6:45",
            "taskStatus":"complete",
            "comments":"",
            "taskDeadline":"2022-04-19T12:00-00", 
        }, {
            "designerId" : "2",
            "projectNumber":"2403",
            "projectName":"Provincetown",
            "task":"markup",
            "taskStart":"2022-04-19T12:00-00",
            "taskEnd":"2022-04-19T12:00-00",
            "taskWorkingHours":"6:45",
            "taskStatus":"working",
            "comments":"",
            "taskDeadline":"2022-04-19T12:00-00"
        }, {
            "designerId" : "1",
            "projectNumber":"739",
            "projectName":"Warwick",
            "task":"markup",
            "taskStart":"2022-04-19T12:00-00",
            "taskEnd":"2022-04-19T12:00-00",
            "taskWorkingHours":"6:45",
            "taskStatus":"working",
            "comments":"",
            "taskDeadline":"2022-04-19T12:00-00"           
        }, {
            "designerId" : "1",
            "projectNumber":"633",
            "projectName":"Milford",
            "task":"markup",
            "taskStart":"2022-04-19T12:00-00",
            "taskEnd":"2022-04-19T12:00-00",
            "taskWorkingHours":"6:45",
            "taskStatus":"working",
            "comments":"",
            "taskDeadline":"2022-04-19T12:00-00"           
        }, {
            "designerId" : "2",
            "projectNumber":"652",
            "projectName":"Clinton",
            "task":"markup",
            "taskStart":"2022-04-19T12:00-00",
            "taskEnd":"2022-04-19T12:00-00",
            "taskWorkingHours":"6:45",
            "taskStatus":"pending",
            "comments":"",
            "taskDeadline":"2022-04-19T12:00-00"           
        }, {
            "designerId" : "1",
            "projectNumber":"407",
            "projectName":"Saugus",
            "task":"markup",
            "taskStart":"2022-04-19T12:00-00",
            "taskEnd":"2022-04-19T12:00-00",
            "taskWorkingHours":"6:45",
            "taskStatus":"pending",
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
                        let workingHours = "";
                        let start = "";
                        let showStartButton = (<button onClick={GetTime}> Start </button>); 
                        start = GetTime.value;
                        let showEndButton = (<button> End </button>);
                        let end = showEndButton;
                        if (tk.taskStatus === "pending") {start = showStartButton;}
                        if (tk.taskStatus === "working") {start = tk.taskStart;}
                        if (tk.taskStatus === "complete") {
                            start = tk.taskStart;
                            end = tk.taskEnd;
                            workingHours = <Moment diff={start} unit="hours" decimal>{end}</Moment>;;  
                        }
                        console.log(start);
                        console.log(end);
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
                </tbody>
            </table>
        </div>
      );
}
export default ShowWorkerTasks;