import React from 'react'
import { Link } from 'react-router-dom'
import SideMenu from './sidemenu'

const Topbar = () => {
  return (
    <>
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="navbarNav" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <img src="/logo.png" alt="HR Ludo Logo" className="dash-logo" />
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <SideMenu />
        </div>
      </div>

      <div className="topbar">
        <button
          type="button"
          className="btn btn-primary humburger-btn"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 21H1.5C0.6 21 0 20.4 0 19.5C0 18.6 0.6 18 1.5 18H13.5C14.4 18 15 18.6 15 19.5C15 20.4 14.4 21 13.5 21ZM22.5 13.5H1.5C0.6 13.5 0 12.9 0 12C0 11.1 0.6 10.5 1.5 10.5H22.5C23.4 10.5 24 11.1 24 12C24 12.9 23.4 13.5 22.5 13.5ZM22.5 6H10.5C9.6 6 9 5.4 9 4.5C9 3.6 9.6 3 10.5 3H22.5C23.4 3 24 3.6 24 4.5C24 5.4 23.4 6 22.5 6Z" fill="white" />
          </svg>
        </button>

        <span className='logo'>
          <Link to="/dashboard"> <img src="/logo.png" alt="HR Ludo Logo" className="dash-logo" />  </Link>
        </span>
        <div className='statusBox ms-auto'>
          <button type='button' className='status-btn ms-auto'>
            <img src="/diamond.png" alt="" />
            <span className='status-value'> 1250 </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.489014" y="0.511488" width="22.977" height="22.977" rx="11.4885" fill="url(#paint0_linear_10_1563)" />
              <path d="M11.0026 17.7442V6.25573H12.9522V17.7442H11.0026ZM6.23315 12.9748V11.0252H17.7216V12.9748H6.23315Z" fill="white" />
              <defs>
                <linearGradient id="paint0_linear_10_1563" x1="11.9775" y1="23.4885" x2="11.9775" y2="0.511486" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#76B82A" />
                  <stop offset="1" stopColor="#FFEE41" />
                </linearGradient>
              </defs>
            </svg>
          </button>
          <button type='button' className='status-btn coin-btn'>
            <img src="/coin.png" alt="" />
            <span className='status-value'> 1250 </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.489014" y="0.511488" width="22.977" height="22.977" rx="11.4885" fill="url(#paint0_linear_10_1563)" />
              <path d="M11.0026 17.7442V6.25573H12.9522V17.7442H11.0026ZM6.23315 12.9748V11.0252H17.7216V12.9748H6.23315Z" fill="white" />
              <defs>
                <linearGradient id="paint0_linear_10_1563" x1="11.9775" y1="23.4885" x2="11.9775" y2="0.511486" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#76B82A" />
                  <stop offset="1" stop-color="#FFEE41" />
                </linearGradient>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default Topbar
