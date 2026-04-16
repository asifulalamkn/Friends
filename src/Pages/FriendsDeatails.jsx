import { useParams } from 'react-router-dom';
import { useInteractions } from '../Context/InteractionContext';
import callIcon from '../assets/call.png';
import textIcon from '../assets/text.png';
import videoIcon from '../assets/video.png';
import { FiClock, FiArchive, FiTrash2 } from 'react-icons/fi';
import friendsData from '../Data/friends.json'; 

const FriendsDeatails = () => {
  const { id } = useParams();
  const { addInteraction } = useInteractions();

  const friend = friendsData.find(f => f.id === parseInt(id));

  if (!friend) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <h2 className="text-xl md:text-2xl font-bold text-slate-400 text-center">Friend not found!</h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start animate-in fade-in duration-500">
      
   
      <div className="lg:col-span-1 space-y-4">
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-slate-50 text-center">
          <img 
            src={friend.picture} 
            className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-4 md:mb-6 object-cover border-4 border-slate-50" 
            alt={friend.name} 
          />
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 mb-2">{friend.name}</h2>
          
          <div className="flex flex-col items-center gap-2 mb-6">
            <span className={`text-white text-[9px] md:text-[10px] font-bold uppercase px-4 py-1 rounded-full tracking-widest ${friend.status === 'Overdue' ? 'bg-red-500' : 'bg-amber-400'}`}>
              {friend.status}
            </span>
            <span className="bg-emerald-50 text-emerald-700 text-[9px] md:text-[10px] font-bold uppercase px-4 py-1 rounded-full tracking-widest">
              {friend.tags[0]}
            </span>
          </div>

          <p className="text-slate-500 italic text-sm md:text-[15px] mb-2 leading-relaxed px-2">
            "{friend.bio}"
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2">
          <ActionButton icon={<FiClock/>} label="Snooze 2 Weeks" />
          <ActionButton icon={<FiArchive/>} label="Archive" />
          <ActionButton icon={<FiTrash2/>} label="Delete" color="text-red-500 hover:bg-red-50" />
        </div>
      </div>
      <div className="lg:col-span-2 space-y-4 md:space-y-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          <MetricBox label="Days Since Contact" value={friend.days_since_contact} />
          <MetricBox label="Goal (Days)" value={friend.goal} />
          <MetricBox label="Next Due" value={friend.next_due_date} />
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-50 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-base md:text-lg font-extrabold text-slate-700 mb-1">Relationship Goal</h3>
            <p className="text-slate-400 text-sm md:text-[15px] font-medium">
              Connect every <span className="font-black text-slate-800">{friend.goal} days</span>
            </p>
          </div>
          <button className="w-full sm:w-auto px-6 py-2 border border-slate-200 rounded-md text-xs font-bold text-slate-400 hover:bg-slate-50 transition-colors">
            Edit
          </button>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-50 shadow-sm">
          <h3 className="text-xs md:text-[13px] font-extrabold text-slate-700 mb-6 md:mb-8 uppercase tracking-widest opacity-70 text-center sm:text-left">
            Quick Check-In
          </h3>
          <div className="grid grid-cols-3 gap-3 md:gap-5">
            <InteractionBtn icon={callIcon} label="Call" onClick={() => addInteraction('Call', friend.name)} />
            <InteractionBtn icon={textIcon} label="Text" onClick={() => addInteraction('Text', friend.name)} />
            <InteractionBtn icon={videoIcon} label="Video" onClick={() => addInteraction('Video', friend.name)} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ActionButton = ({ icon, label, color = "text-slate-600 hover:bg-slate-50" }) => (
  <button className={`w-full flex items-center justify-center gap-3 p-3.5 bg-white border border-slate-100 rounded-xl font-bold transition-all text-xs md:text-sm shadow-sm ${color}`}>
    <span className="text-lg opacity-70">{icon}</span> {label}
  </button>
);

const MetricBox = ({ label, value }) => (
  <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-50 shadow-sm text-center">
    <div className="text-2xl md:text-[34px] font-black text-[#1e3a2f] leading-none mb-2">{value}</div>
    <div className="text-[9px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest">{label}</div>
  </div>
);

const InteractionBtn = ({ icon, label, onClick }) => (
  <button onClick={onClick} className="flex flex-col items-center justify-center p-4 md:p-8 border border-slate-50 bg-[#fafafa] rounded-2xl hover:border-[#1e3a2f] hover:bg-white hover:shadow-lg transition-all group active:scale-95">
    <img src={icon} alt={label} className="w-8 h-8 md:w-10 md:h-10 mb-2 md:mb-3 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
    <span className="font-bold text-slate-500 text-[10px] md:text-sm group-hover:text-[#1e3a2f] uppercase tracking-wider">{label}</span>
  </button>
);

export default FriendsDeatails;