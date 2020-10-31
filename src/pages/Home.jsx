import React from 'react';
import '../styles/home.css';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <Sidebar />
      <main>
        <h1>Home</h1>
      </main>
    </div>
  );
}

export default Home;