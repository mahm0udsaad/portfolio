import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ setGoToProjects }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  useNavigate()
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed bg-transparent p-4 flex justify-between items-center w-4/5 lg:w-11/12 lg:mx-10">
      <div className="font-semibold text-xl"><i className="color-blue fas fa-database">logo</i></div>
      <div className="hidden sm:flex space-x-4">
        <Link 
          to={'/'}
          className={`hoverd-btn hover:text-white ease-in duration-300 px-4 py-2 rounded ${
            menuOpen ? "hoverd-btn " : ""
          }`}
        >
          Home
        </Link>
        <Link
          onClick={()=>setGoToProjects(true)}
          className={` hoverd-btn hover:text-white ease-in duration-300 px-4 py-2 rounded ${
            menuOpen ? "hoverd-btn " : ""
          }`}
        >
          Projects
        </Link>
        <Link
          to={'/About'}
          className={` hoverd-btn hover:text-white ease-in duration-300 px-4 py-2 rounded ${
            menuOpen ? "hoverd-btn " : ""
          }`}
        >
          About
        </Link>
        <Link
          to={'/contact'}
          className={` hoverd-btn active text-white ease-in duration-300 px-4 py-2 rounded ${
            menuOpen ? "hoverd-btn " : ""
          }`}
        >
          Contact Me
        </Link>
      </div>
      <button className="lg:hidden  focus:outline-none" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`z-50 bg-white sm:hidden flex flex-col w-full items-center absolute top-0 right-0 bg-blue p-4 space-y-4 space-x-5 transform ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-50 pointer-events-none"
        } ease-in-out duration-300`}
      >
        <button className="absolute top-2 p-5 right-3" onClick={toggleMenu}>
        <i className="fa-solid fa-xmark"></i>
        </button>
        <Link   className="p-5 hoverd-btn rounded">
          Home
        </Link>
        <Link    className="p-5 hoverd-btn rounded">
          Projects
        </Link>
        <Link   className="p-5 hoverd-btn rounded">
          About
        </Link>
        <Link  
         className="p-5 hoverd-btn active rounded">
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
