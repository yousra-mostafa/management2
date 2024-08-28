import React, {useEffect} from 'react'
import Sidebar from './components/Sidebar/Sidebar';
import Searchbarr from './components/Searchbarr/Searchbarr';
import {Outlet} from 'react-router-dom';
import {setupSidebarToggle} from './utils/main';
import './App.css';
import './assets/styles/general.css';


function Layout() {
  useEffect(() => {
    setupSidebarToggle();
    
  }, []);
  return (
    <div className="row two-nav">
        <div className="col-2">
            <Sidebar/>
        </div>
        <div className="col-10 secound-part">
            <Searchbarr/>
            <Outlet/>
        </div>

    </div>
 
  )
}

export default Layout