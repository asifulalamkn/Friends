import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-white overflow-hidden">
    
      <h1 className="text-8xl md:text-[120px] font-black text-slate-100 leading-none select-none">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mt-[-20px] md:mt-[-40px] mb-4 relative z-10">
        Page Not Found
      </h2>
      
      <p className="text-slate-500 mb-10 max-w-sm md:max-w-md text-sm md:text-base leading-relaxed">
      </p>
      <Link 
        to="/" 
        className="bg-[#1e3a2f] text-white font-bold py-3.5 px-8 md:px-10 rounded-full flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg active:scale-95 text-sm md:text-base"
      >
        <FiHome className="text-lg" /> Back to Home
      </Link>
    </div>
  );
};

export default NotFound;