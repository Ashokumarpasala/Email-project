import React, { useState } from 'react';
import Sidebar from './SideBar';
import {  Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Inbox from './components/Inbox';
import Compose from './components/Compose';
import './App.css';
import StarComponents from './components/StarComponents';
import Sent from './components/Sent';
import MainHeader from './components/MainHeader';


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <MainHeader toggleSidebar={toggleSidebar} />
      <div className="row">
        <div className="col-3">
          <Sidebar toggleSidebar={sidebarOpen} />
        </div>
        <div className="col-8 m-5">
            <Routes>
              <Route exact path='/' element={<LoginPage />} />
              <Route exact path='/compose' element={<Compose />} />
              <Route exact path='/inbox' element={<Inbox />} />
              <Route exact path='/important-emails' element={<StarComponents />} />
              <Route exact path='/sent-emails' element={<Sent />} />
            </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
