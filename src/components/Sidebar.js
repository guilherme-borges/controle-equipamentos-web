import React from 'react';
import '../styles/sidebar.css';
import { FiHome, FiEdit, FiBarChart2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar-container">
      <nav>
        <Link to="/" className="sidebar-nav-item">
          <FiHome className="sidebar-item-icon" />Início
        </Link>
        <Link to="/equipamentos" className="sidebar-nav-item">
          <FiEdit className="sidebar-item-icon" />Equipamentos
        </Link>
        <Link to="/relatorios" className="sidebar-nav-item">
          <FiBarChart2 className="sidebar-item-icon" />Relatórios
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;