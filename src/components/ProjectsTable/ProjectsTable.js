function ProjectsTable() {
    let projectsAll = [
        {
            "number":"087",
            "adress":"Mashpee, MA",
            "stage":"L3",
            "status":"working",
            "workingHours":"13",
        }, {
            "number":"2403",
            "adress":"Provincetown, MA",
            "stage":"r3",
            "status":"finished",
            "workingHours":"115",
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
                    { projectsAll.map( (pr : {...}, i:number) => {
                        return (
                            <tr key={i}>
                                <td> {pr.number} </td>
                                <td> {pr.adress} </td>
                                <td> {pr.stage} </td>
                                <td> {pr.status} </td>
                                <td> {pr.workingHours} </td>
                            </tr>
                        )}
                    )}  
                </tbody>
            </table>
        </div>
      );
}

export default ProjectsTable; 