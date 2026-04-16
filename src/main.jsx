import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { InteractionProvider } from './Context/InteractionContext';
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home';
import FriendsDeatails from './Pages/FriendsDeatails';
import Timeline from './Pages/Timeline';
import Stats from './Pages/Stats';
import Notfound from './Pages/Notfound';

// Styles
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InteractionProvider>
      <BrowserRouter>
        <Toaster 
          position={window.innerWidth < 768 ? "bottom-center" : "top-center"} 
          toastOptions={{
            duration: 3000,
            style: {
              background: '#1e3a2f',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '14px', 
              borderRadius: '12px',
              padding: '12px 20px',
              maxWidth: '90%', 
            }
          }} 
        />
        
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="friend/:id" element={<FriendsDeatails />} />
            <Route path="timeline" element={<Timeline />} />
            <Route path="stats" element={<Stats />} />
            
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </InteractionProvider>
  </React.StrictMode>
);