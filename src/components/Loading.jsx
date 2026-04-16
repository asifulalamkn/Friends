const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <div className="w-10 h-10 md:w-12 md:h-12 border-4 border-slate-100 border-t-[#1e3a2f] rounded-full animate-spin mb-6"></div>
      <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px] animate-pulse">
        Loading Data...
      </p>
    </div>
  );
};

export default Loading;