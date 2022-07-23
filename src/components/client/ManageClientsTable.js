import React from "react";
import { useEffect, useState } from "react";
function ManageClientsTable(props) {
    let projectsData = [
       {
          "projectNumber":"087",
          "projectName":"Mashpee",
          "projectAdress":"MA",
          "projectStage":"L3",
          "projectStatus":"working",
          "expectingData":"",
        }, {
          "projectNumber":"2403",
          "projectName":"Provincetown",
          "projectAdress":"MA",
          "projectStage":"r3",
          "projectStatus":"finished",
          "expectingData":"",
        }, {
          "projectNumber":"739",
          "projectName":"Warwick",
          "projectAdress":"RI - Apex",
          "projectStage":"as-built",
          "projectStatus":"waiting feedback",
          "expectingData":"",
        }, {
          "projectNumber":"633",
          "projectName":"Milford",
          "projectAdress":"MA",
          "projectStage":"r8",
          "projectStatus":"sent for approaval",
          "expectingData":"approaval",
        }, {
          "projectNumber":"652",
          "projectName":"Clinton",
          "projectAdress":"CT",
          "projectStage":"IP",
          "projectStatus":"in construction",
          "expectingData":"life f2",
        }, {
          "projectNumber":"407",
          "projectName":"Saugus",
          "projectAdress":"MA",
          "projectStage":"red line",
          "projectStatus":"expecting data",
          "expectingData":"as-built",
        }
      ] ;

      return (
        <div className="List" id = "projects" > 
            <table>
                <thead>
                    <tr>
                        <th className="num"> # </th>
                        <th className="prName"> adress </th>
                        <th className="prStage"> stage </th>
                        <th className="prStatus"> status </th>
                        <th className="expecting"> expecting </th>
                    </tr>
                </thead>
                <tbody>
                    { projectsData.map( (pr) => {
                        let num = pr.projectNumber;
                        return (
                            <tr key={num} >
                                <td className="num" > {num} </td>
                                <td className="prName"> {pr.projectName}, {pr.projectAdress} </td>
                                <td className="prStage"> {pr.projectStage} </td>
                                <td className="prStatus"> {pr.projectStatus} </td>
                                <td className="expecting"> {pr.expectingData} </td>
                            </tr>
                        )}
                    )}  
                </tbody>
            </table>
        </div>
      );
}


export default ManageClientsTable; 