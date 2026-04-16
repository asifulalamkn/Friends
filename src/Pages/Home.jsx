import friendsData from '../Data/friends.json';
import FriendCard from '../components/Friends';
import { FiPlus } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-20">
    
      <header className="text-center mb-16 md:mb-24">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#1e3a2f] mb-6 tracking-tight leading-[1.1] lg:whitespace-nowrap">
          Friends to keep close in your life
        </h1>
        
        <p className="text-slate-500 max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed px-4">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the <br className="hidden md:block" /> relationships that matter most.
        </p>
        
        <button className="bg-[#1e3a2f] text-white w-full sm:w-auto px-10 py-4 rounded-md flex items-center justify-center gap-2 mx-auto font-bold shadow-lg hover:bg-[#2d5746] transition-all active:scale-95 text-sm md:text-base">
          <FiPlus className="text-xl" /> Add a Friend
        </button>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20 md:mb-28">
        <StatCard label="Total Friends" value={friendsData.length} />
        <StatCard label="On Track" value="4" />
        <StatCard label="Need Attention" value="8" />
        <StatCard label="Interactions This Month" value="12" />
      </div>
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-lg md:text-xl font-black text-slate-800 uppercase tracking-widest opacity-70 whitespace-nowrap">
          Your Friends
        </h2>
        <div className="h-px bg-slate-100 w-full"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {friendsData.map(friend => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};
const StatCard = ({ label, value }) => (
  <div className="bg-white p-10 md:p-12 rounded-xl border border-slate-50 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] text-center transition-all hover:shadow-xl hover:-translate-y-1">
    <div className="text-3xl md:text-[40px] font-black text-slate-800 mb-2 leading-none">{value}</div>
    <div className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">{label}</div>
  </div>
);

export default Home;