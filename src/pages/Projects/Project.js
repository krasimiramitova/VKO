import React from "react";
import Card from "../../components/commons/Card";
import ProjectTable from "../../components/ProjectTable/ProjectTable";
import SideMenu from "../../components/Nav/SideMenu";


function ProjectPage() {
  
  return (
    <div> 
      <SideMenu/>
      <div className="Page" >
        <Card> 
          <ProjectTable 
          
         // data = {project}
          />
        </Card> 
      </div>
    </div>
  );
}

export default ProjectPage;
