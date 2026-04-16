import { useState } from 'react';
import { useInteractions } from '../Context/InteractionContext';
import callIcon from '../assets/call.png';
import textIcon from '../assets/text.png';
import videoIcon from '../assets/video.png';
import { FiChevronDown } from 'react-icons/fi';

const Timeline = () => {
  const { interactions } = useInteractions();
  const [filter, setFilter] = useState('All');

  const filteredInteractions = filter === 'All' 
    ? interactions 
    : interactions.filter(item => item.type === filter);

  const getIcon = (type) => {
    switch (type) {
      case 'Call': return callIcon;
      case 'Text': return textIcon;
      case 'Video': return videoIcon;
      default: return 'https://cdn-icons-png.flaticon.com/512/3281/3281307.png'; 
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-16">
      <h1 className="text-3xl md:text-[40px] font-black text-slate-800 mb-6 md:mb-8 text-center md:text-left">
        Timeline
      </h1>
      <div className="relative w-full sm:max-w-[220px] mb-8 md:mb-10 mx-auto md:mx-0">
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full appearance-none bg-white border border-slate-200 text-slate-500 py-3.5 px-4 pr-10 rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-slate-100 transition-all cursor-pointer shadow-sm"
        >
          <option value="All">All Interactions</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
          <option value="Meetup">Meetup</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
          <FiChevronDown />
        </div>
      </div>
      <div className="space-y-3 md:space-y-4">
        {filteredInteractions.length > 0 ? (
          filteredInteractions.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-4 md:p-5 rounded-2xl border border-slate-50 shadow-sm flex items-center gap-4 md:gap-6 hover:shadow-md transition-all group active:scale-[0.98]"
            >
              <div className="bg-slate-50 p-2.5 md:p-3 rounded-xl group-hover:bg-white transition-colors shrink-0">
                <img 
                  src={getIcon(item.type)} 
                  alt={item.type} 
                  className="w-7 h-7 md:w-9 md:h-9 object-contain" 
                />
              </div>
           <div className="flex flex-col min-w-0">
                <h3 className="text-[15px] md:text-[18px] font-bold text-slate-700 truncate">
                  {item.type} <span className="text-slate-400 font-medium">with</span> {item.friend}
                </h3>
                <p className="text-[10px] md:text-[12px] text-slate-400 font-black mt-0.5 uppercase tracking-widest">
                  {item.date}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16 md:py-24 bg-white rounded-[2rem] border border-dashed border-slate-200 px-6">
            <p className="text-slate-400 font-bold text-base md:text-lg">No interaction history found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;