import React from "react";

function ProjectsTable() {
    let projectsAll = [
        {
            "projectNumber":"087",
            "projectName":"Mashpee",
            "projectAdress":"MA",
            "projectStage":"L3",
            "projectStatus":"working",
            "projectWorkingHours":"13",
        }, {
            "projectNumber":"2403",
            "projectName":"Provincetown",
            "projectAdress":"MA",
            "projectStage":"r3",
            "projectStatus":"finished",
            "projectWorkingHours":"115",
        }, {
            "projectNumber":"739",
            "projectName":"Warwick",
            "projectAdress":"RI - Apex",
            "projectStage":"as-built",
            "projectStatus":"waiting feedback",
            "projectWorkingHours":"25",
        }, {
            "projectNumber":"633",
            "projectName":"Milford",
            "projectAdress":"MA",
            "projectStage":"r8",
            "projectStatus":"sent for approaval",
            "projectWorkingHours":"88",
        }, {
            "projectNumber":"652",
            "projectName":"Clinton",
            "projectAdress":"CT",
            "projectStage":"IP",
            "projectStatus":"in construction",
            "projectWorkingHours":"16",
        }, {
            "projectNumber":"407",
            "projectName":"Saugus",
            "projectAdress":"MA",
            "projectStage":"red line",
            "projectStatus":"expecting data",
            "projectWorkingHours":"72",
        }
    ] ;
    return (
        <div className="List" id = "projects" > 
            <table>
                <thead>
                    <tr>
                        <th> # </th>
                        <th> adress </th>
                        <th> stage </th>
                        <th> status </th>
                        <th> working hours </th>
                    </tr>
                </thead>
                <tbody>
                    { projectsAll.map( (pr, i) => {
                        return (
                            <tr key= {i}>
                                <td> {pr.projectNumber} </td>
                                <td> {pr.projectName}, {pr.projectAdress} </td>
                                <td> {pr.projectStage} </td>
                                <td> {pr.projectStatus} </td>
                                <td> {pr.projectWorkingHours} </td>
                            </tr>
                        )}
                    )}  
                </tbody>
            </table>
        </div>
      );
}

export default ProjectsTable; 