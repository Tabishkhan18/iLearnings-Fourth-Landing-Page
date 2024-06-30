import React, { useState } from 'react';

const HamburgerIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <label className="flex flex-col gap-2 w-8 cursor-pointer" onClick={toggleMenu}>
        <div
          className={`rounded-2xl h-[3px] w-1/2 bg-black duration-500 ${
            isOpen ? 'rotate-[225deg] origin-right -translate-x-[12px] -translate-y-[1px]' : ''
          }`}
        ></div>
        <div
          className={`rounded-2xl h-[3px] w-full bg-black duration-500 ${
            isOpen ? '-rotate-45' : ''
          }`}
        ></div>
        <div
          className={`rounded-2xl h-[3px] w-1/2 bg-black duration-500 place-self-end ${
            isOpen ? 'rotate-[225deg] origin-left translate-x-[12px] translate-y-[1px]' : ''
          }`}
        ></div>
      </label>

      <div
        className={`fixed top-16 right-0 w-[250px] h-full bg-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 text-black">
          <h2 className="text-2xl font-bold">Menu</h2>
          <ul className="mt-4">
            <li className="my-8"><a href="#" className="bg-blue-500 text-white px-10 py-2 rounded">Log In</a></li>
            <li className="my-8"><a href="#" className="border-2 border-blue-500 text-blue-500 px-8 py-2 rounded">Sign Up</a></li>
          </ul>
        </div>
      </div>

      {/* Overlay to close the menu when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default HamburgerIcon;
