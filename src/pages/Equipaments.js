import React from 'react';
import '../styles/global.css';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

function Equipaments() {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <main>
          <h1>Equipamentos</h1>
        </main>
      </div>
    </>
  );
}

export default Equipaments;