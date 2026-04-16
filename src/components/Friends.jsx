import { Link } from 'react-router-dom';

const FriendCard = ({ friend }) => {
  const statusStyles = {
    'Almost Due': 'bg-amber-400 text-white',
    'Overdue': 'bg-red-500 text-white',
    'On-Track': 'bg-[#1e3a2f] text-white',
  };

  return (
    <Link 
      to={`/friend/${friend.id}`} 
      className="bg-white p-6 md:p-8 rounded-2xl border border-slate-50 shadow-sm text-center hover:scale-[1.02] transition-all group block active:scale-95"
    >

      <img 
        src={friend.picture} 
        className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-4 object-cover border-4 border-slate-50 group-hover:border-emerald-50 transition-colors" 
        alt={friend.name}
      />
      
      <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-tight">{friend.name}</h3>
      <p className="text-[12px] md:text-[13px] text-slate-400 font-medium mb-3">
        {friend.days_since_contact}d ago
      </p>
      <div className="flex flex-wrap justify-center gap-1.5 mb-5">
        {friend.tags.map(tag => (
          <span 
            key={tag} 
            className="bg-emerald-50 text-emerald-700 text-[9px] md:text-[10px] font-bold px-2.5 md:px-3 py-0.5 rounded-full uppercase tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>
      <div 
        className={`text-[10px] md:text-[11px] font-bold uppercase py-1.5 px-4 md:px-5 rounded-full inline-block tracking-widest shadow-sm ${statusStyles[friend.status]}`}
      >
        {friend.status}
      </div>
    </Link>
  );
};

export default FriendCard;


