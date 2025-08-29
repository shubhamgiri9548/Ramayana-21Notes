// components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold">
        <Link to="/">Ramayana</Link>
      </div>

      {/* Hamburger for small screens */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Links */}
      <ul
        className={`flex-col md:flex-row md:flex md:space-x-6 absolute md:static bg-blue-600 w-full md:w-auto left-0 md:left-auto top-16 md:top-auto transition-all ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <li className="px-4 py-2 md:py-0">
          <Link to="/" className="hover:text-yellow-300 block" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li className="px-4 py-2 md:py-0">
          <Link to="/seasons" className="hover:text-yellow-300 block" onClick={() => setIsOpen(false)}>Seasons</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
