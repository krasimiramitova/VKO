function ProjectsPage() {
  return (
    <div className="List" id = "projects" > 
      <table>
        <tr>
          <th> # </th>
          <th> adress </th>
          <th> stage </th>
          <th> status </th>
          <th> working hours </th>
        </tr>
        <tr>
          <td> 087 </td>
          <td> Mashpee, MA </td>
          <td> L3 </td>
          <td> working </td>
          <td> 13 </td>
        </tr>
        <tr>
          <td> 2403 </td>
          <td> Provincetown, MA </td>
          <td> r3 </td>
          <td> finished </td>
          <td> 15 </td>
        </tr>
      </table>
    </div>
  );
}

export default ProjectsPage;
