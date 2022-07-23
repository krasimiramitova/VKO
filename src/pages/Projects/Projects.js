import React from "react";
import Card from "../../components/commons/Card";
import ProjectsTable from "../../components/ProjectsTable/ProjectsTable";
import ProjectTable from "../../components/ProjectTable/ProjectTable";
import { useState } from "react";
import SideMenu from "../../components/Nav/SideMenu";


function ProjectsPage() {
  let projectsData = [
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
  
  const [project, setProject] = useState();

  let ChangeProjectHandler = (pjId) => {
    setProject (projectsData.filter(pj => {
      if (pj.projectNumber === pjId) {
        return pj;
      }
    }));
  }

  return (
    <div> 
      <SideMenu/>
      <div className="Page" >
        <h1>Projects</h1> 
        <Card>
          <ProjectsTable projects = {projectsData} onClickEvent = {
            ChangeProjectHandler
          }/>
        </Card>

        {project && <Card> 
          <ProjectTable data = {project}/>
        </Card>}
      </div>

    </div>
  );
}

export default ProjectsPage;
