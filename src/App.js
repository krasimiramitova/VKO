import './App.css';
import Nav from './components/Nav/Nav';
import ProjectsPage from './pages/Projects/Projects';

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <Nav/>
      <div className='SideBar'> sddsg</div>
      <div className='MainContent'>
        <ProjectsPage/>
      </div>
      <div id = "project" >  </div>
      <div id = "tasks" >  </div>
      <div id = "designer" >  </div>

      
      <footer></footer>
    </div>
  );
}

export default App;
