import React from 'react';
import Topbar from './components/Topbar';
import Bottombar from './components/Bottombar';

const Layout = ({ children }) => {
    return (
        <div className="dashboard d-flex">
            <div className="sidebar">
                <Topbar />

                <div className="mian-content"> 
                    {children}
                </div>
                <div className='BottomSection'>
                    <Bottombar />
                </div>
            </div>
            <div className="main-content right-panel">
                <img alt="Big Logo" class="big-logo" src="/Hr-ludo.png" />
            </div>
        </div>
    );
};

export default Layout;
