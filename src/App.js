import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainMenu from './components/Nav/MainMenu';
import ProjectsPage from './pages/Projects/Projects';
import ManagerPage from './pages/Manager/Manager';
import DesignersPage from './pages/Designers/Designer';
import DesignerTasks from './pages/DesignerTasks/DesignerTasks';

function App() {
  return (


    <div className="App">
      <header>
      </header>
      <Routes>
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="/" element={<MainMenu />} />
        <Route path="/Manager" element={<ManagerPage />} />
        <Route path="/Designers" element={<DesignersPage />} />
        <Route path="/Designers/1" element={<DesignerTasks />} />
      </Routes>

      
      <footer></footer>
    </div>
  );
}

export default App;
