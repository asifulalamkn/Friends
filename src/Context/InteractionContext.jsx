import { createContext, useState, useContext } from 'react';
import toast from 'react-hot-toast';

const InteractionContext = createContext();

export const InteractionProvider = ({ children }) => {
  const [interactions, setInteractions] = useState([
    { id: 1, type: 'Meetup', friend: 'Tom Baker', date: 'March 29, 2026' },
    { id: 2, type: 'Text', friend: 'Sarah Chen', date: 'March 28, 2026' }
  ]);

  const addInteraction = (type, friendName) => {
    const newEntry = {
      id: Date.now(),
      type,
      friend: friendName,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    };
    
    setInteractions([newEntry, ...interactions]);
    toast.success(`${type} recorded with ${friendName}!`, {
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        borderRadius: '12px',
        padding: '12px 24px',
        background: '#1e3a2f',
        color: '#fff',
      },
      position: window.innerWidth < 768 ? 'bottom-center' : 'top-right',
    });
  };

  return (
    <InteractionContext.Provider value={{ interactions, addInteraction }}>
      {children}
    </InteractionContext.Provider>
  );
};

export const useInteractions = () => useContext(InteractionContext);