import React from 'react';
import ProjectTable from "../ProjectsTable";

function ProjectsPage() {
  return (
    <div className="List" id = "projects" > 
      
      <div className='SideBar'> </div>
      
      <div className='MainContent'>
        <ProjectTable></ProjectTable>
       </div>
 
    </div>
  );
}

export default ProjectsPage;
