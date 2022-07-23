import React from "react";
import { Link } from "react-router-dom";

function ProjectsTable(props) {
    return (
        <div className="List" id = "projects" > 
            <table>
                <thead>
                    <tr>
                        <th className="num"> # </th>
                        <th className="prName"> adress </th>
                        <th className="prStage"> stage </th>
                        <th className="prStatus"> status </th>
                        <th className="prHours"> working hours </th>
                    </tr>
                </thead>
                <tbody>
                    { props.projects.map( (pr) => {
                        let num = pr.projectNumber;
                        return (
                            <tr key={num} >
                                <td className="num" > {num} </td>
                                <td className="prName"> 
                                    <Link to = {"/Projects/"+num} > {pr.projectName}, {pr.projectAdress} </Link>
                                </td>
                                <td className="prStage"> {pr.projectStage} </td>
                                <td className="prStatus"> {pr.projectStatus} </td>
                                <td className="prHours"> {pr.projectWorkingHours} </td>
                            </tr>
                        )}
                    )}  
                </tbody>
            </table>
        </div>
      );
}

export default ProjectsTable; 