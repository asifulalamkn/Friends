import { Link, NavLink } from 'react-router-dom';
import { FiHome, FiClock, FiBarChart2 } from 'react-icons/fi';
import logo from '../assets/logo.png';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-3 md:px-4 py-2 rounded-md font-bold transition-all ${
      isActive 
        ? 'bg-[#1e3a2f] text-white shadow-md' 
        : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
    }`;

  return (
    <nav className="bg-white border-b border-slate-100 h-16 md:h-20 flex items-center sticky top-0 z-50 px-4 md:px-0">
      <div className="max-w-7xl mx-auto w-full md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src={logo} alt="Logo" className="h-6 md:h-7 w-auto" />
        </Link>

        <div className="flex items-center gap-2 md:gap-6">
          <NavLink to="/" className={linkClass}>
            <FiHome className="text-lg md:text-xl" />
            <span className="hidden sm:inline text-[14px] md:text-[15px]">Home</span>
          </NavLink>
          
          <NavLink to="/timeline" className={linkClass}>
            <FiClock className="text-lg md:text-xl" />
            <span className="hidden sm:inline text-[14px] md:text-[15px]">Timeline</span>
          </NavLink>
          
          <NavLink to="/stats" className={linkClass}>
            <FiBarChart2 className="text-lg md:text-xl" />
            <span className="hidden sm:inline text-[14px] md:text-[15px]">Stats</span>
          </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;