import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainMenu from './components/Nav/MainMenu';
import ProjectsPage from './pages/Projects/Projects';
import ProjectPage from './pages/Projects/Project';
import ManagerPage from './pages/Manager/Manager';
import DesignersPage from './pages/Designers/Designer';
import LoginPage from './pages/Login/Login';
import LogoutPage from './pages/Logout/Logout';
import DesignerTasks from './pages/DesignerTasks/DesignerTasks';
import ManageDesignersPage from './pages/Manager/Designers/ManageDesigners';
import ManageTasksPage from './pages/Manager/Daily/ManageTasks';
import ManageClientsPage from './pages/Manager/Client/ManageClient';
import { UserContextProvider } from './contexts/UserContext';
// import UserContext from './contexts/UserContext';

function App() {
//  const userCxt = UserContextProvider;

  return (
    <UserContextProvider>
    <div className="App">
        <header>
        </header>
        <Routes>
          <Route path="/Projects" element={<ProjectsPage />} />
          <Route path="/Projects/:projectNumber" element={<ProjectPage/>}/>
          <Route path="/" element={<MainMenu />} />
          <Route path="/Manager" element={<ManagerPage />} />
          <Route path="/Designers" element={<DesignersPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Logout" element={<LogoutPage />} />
          <Route path="/Manager/Designers" element={<ManageDesignersPage/>} />
          <Route path="/Manager/Daily" element={<ManageTasksPage/>} />
          <Route path="/Manager/Client" element={<ManageClientsPage/>} />
        </Routes>
        <footer></footer>
      </div>
    
    </UserContextProvider>
  );
}

export default App;
