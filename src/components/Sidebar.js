import React from 'react';
import '../styles/global.css';
import '../styles/sidebar.css';
import { FiHome, FiEdit, FiBarChart2 } from 'react-icons/fi';

function Sidebar() {
  return (
    <aside className="sidebar-container">
      <nav>
        <a href=""><FiHome className="sidebar-item-icon" />Início</a>
        <a href=""><FiEdit className="sidebar-item-icon" />Equipamentos</a>
        <a href=""><FiBarChart2 className="sidebar-item-icon" />Relatórios</a>
      </nav>
    </aside>
  );
}

export default Sidebar;