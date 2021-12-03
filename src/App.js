import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';



function App() {

  const [activePage, setActivePage] = useState('Home');

  const handleActivePage = (activePage) => {
    setActivePage(activePage);
  };

  return (
      <div>
        <div><Header /></div>
        <div className="flex-row">
          <div className="col-2 sideBar"><Navbar changeActivePage={handleActivePage} /></div>
          <div className="col-8"><Main activePage={activePage} /></div>
        </div>
      </div>
  );
}

export default App;
