import { FiInstagram, FiFacebook } from 'react-icons/fi';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1e3a2f] text-white py-12 md:py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-4xl md:text-6xl font-black mb-4 md:mb-6 tracking-tight">KeenKeeper</h2>
        <p className="text-emerald-100/60 text-xs md:text-sm max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-medium px-2">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <div className="mb-10 md:mb-12">
          <p className="text-[14px] md:text-[18px] font-extrabold uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-80 mb-4 md:mb-6">
            Social Links
          </p>
          <div className="flex justify-center gap-4">
            <SocialIcon icon={<FiInstagram />} />
            <SocialIcon icon={<FiFacebook />} />
            <SocialIcon icon={<FaXTwitter />} />
          </div>
        </div>
        <div className="pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] md:text-[11px] font-bold opacity-30 order-2 md:order-1">
            © 2026 KeenKeeper. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[10px] md:text-[11px] font-bold opacity-40 uppercase tracking-widest order-1 md:order-2">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => (
  <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center text-[#1e3a2f] text-base md:text-lg hover:bg-emerald-400 transition-all shadow-lg">
    {icon}
  </a>
);

export default Footer;