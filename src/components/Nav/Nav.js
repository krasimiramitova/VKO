import React from 'react';
import { Routes, Route } from "react-router-dom";

function Nav() {
  return (
    <div id = "MainiMenu">
      <button className = 'Nav' id = 'projectBut'> PROJECTS </button>
      <button className = 'Nav' id = 'managerBut'> MANAGER </button>
      <button className = 'Nav' id = 'designerBut'> DESIGNERS </button>
      <button className = 'Nav' id = 'HomeBut'> HOME </button>
      </div>
  );
}

export default Nav;
