import React from 'react';
import HamburgerIcon from './HamburgerIcon'; // Adjust the path as necessary


const Navbar = () => {
  return (
    <header className="flex fixed top-0 left-0 right-0 justify-between items-center p-5 bg-white shadow-md">
      <div className="text-3xl font-bold text-blue-500"><a href="https://www.ilearningscareer.com/">iLearnings</a></div>
      <nav className="hidden md:flex space-x-4">
        
        <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded">Log In</a>
        <a href="#" className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded">Sign Up</a>
      </nav>
      <button className="md:hidden text-blue-500"> <HamburgerIcon /></button>
    </header>
  );
}

export default Navbar;
