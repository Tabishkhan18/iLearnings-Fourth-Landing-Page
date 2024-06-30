import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './index.css'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
