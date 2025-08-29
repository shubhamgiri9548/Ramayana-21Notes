// components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/">Ramayana</Link>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-yellow-300">Home</Link>
        </li>
        <li>
          <Link to="/seasons" className="hover:text-yellow-300">Seasons</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
