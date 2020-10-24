import React from 'react';
import '../styles/global.css';
import '../styles/home.css';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

function Home() {
  return (
    <>
    <Header />
    <div className="container">
      <Sidebar />
      <main>
        <h1>Home</h1>
      </main>
    </div>
    </>
  );
}

export default Home;