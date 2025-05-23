import React, { useState } from 'react';
import Modal from 'react-modal';
import Layout from '../layouts'

Modal.setAppElement('#root');
const MyProfile = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Layout>
                <div className='profile-mainBox'>
                    <h1 className='page-title'>My Profile </h1>
                    <ul className='profile-status'>
                        <li className='profile-card CoinWon'>
                            <span className='profile-icon'>
                                <svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9994 10.9998C18.8671 10.9998 23.9988 8.28483 23.9988 5.85724C23.9988 3.42989 18.867 0.714844 11.9994 0.714844C5.13177 0.714844 0.000114298 3.42989 0.000114298 5.85724C0.000114298 8.28483 5.13166 10.9998 11.9994 10.9998ZM11.9994 31.5705C13.0018 31.5705 13.9666 31.5122 14.8843 31.406C14.1048 30.4047 13.4679 29.3001 12.9917 28.1238C12.6624 28.1349 12.332 28.1426 11.9993 28.1426C8.07507 28.1426 4.35877 27.365 1.53526 25.9532C0.979309 25.6752 0.467709 25.3766 0.000114298 25.0604V26.4281C0.000114298 28.8555 5.13166 31.5705 11.9994 31.5705ZM11.9994 24.7136C12.0346 24.7136 12.0692 24.7131 12.1043 24.7129C12.0331 24.1441 11.9974 23.5714 11.9973 22.9981C11.9973 22.4177 12.0339 21.8458 12.1043 21.2843C12.0692 21.2843 12.0345 21.2856 11.9994 21.2856C8.07518 21.2856 4.359 20.508 1.53537 19.0962C0.979309 18.8182 0.467595 18.5196 0 18.2035V19.5711C0.000114298 21.9986 5.13166 24.7136 11.9994 24.7136ZM11.9994 17.8565C12.3395 17.8565 12.6751 17.8497 13.0065 17.8366C13.5352 16.5405 14.259 15.3329 15.1527 14.2555C14.1055 14.3709 13.0529 14.4287 11.9994 14.4287C8.07518 14.4287 4.359 13.6511 1.53537 12.2393C0.979309 11.9612 0.467595 11.6627 0 11.3465V12.7142C0.000114298 15.1417 5.13166 17.8565 11.9994 17.8565ZM17.1428 17.3155C16.3878 18.4493 15.8667 19.7224 15.6103 21.0602C15.4879 21.6989 15.4263 22.3478 15.4264 22.9981C15.4264 23.4961 15.4627 23.9858 15.5314 24.465C15.6969 25.6197 16.0592 26.7375 16.6024 27.7698C17.1603 28.83 17.8981 29.7853 18.7828 30.5931C20.6125 32.2643 23.0459 33.285 25.7133 33.285C31.3854 33.285 36.0001 28.6703 36.0001 22.9981C36.0001 17.3258 31.3854 12.7113 25.7133 12.7113C25.127 12.7113 24.5522 12.7613 23.9924 12.856C21.1409 13.3382 18.6848 14.9977 17.1428 17.3155Z" fill="#FFEE41" />
                                </svg>

                            </span>
                            <span className='profile-card-value'>
                                <span className=''>Coin Won</span>
                                <span className=''>6690</span>
                            </span>
                        </li>
                        <li className='profile-card BattlePlayed'>
                            <span className='profile-icon'>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1164_638)">
                                        <path d="M16.3624 24.4348L11.1932 20.0781L10.1221 21.349C9.48932 20.9846 8.77663 20.7744 8.02577 20.7744C6.8969 20.7744 5.83813 21.2121 5.04297 22.0072L13.9923 30.9566C15.3682 29.5807 15.5767 27.4892 14.6509 25.8771L16.3624 24.4348Z" fill="#FF5521" />
                                        <path d="M27.9721 20.7737C27.2235 20.7737 26.5129 20.9829 25.8818 21.3452L7.8679 0H0V7.8679L21.3453 25.8818C20.4228 27.4931 20.6322 29.5816 22.0065 30.956L30.9559 22.0066C30.1608 21.2115 29.101 20.7737 27.9721 20.7737ZM11.2877 12.7791L3.76038 5.25178L5.25178 3.76038L12.7791 11.2877L11.2877 12.7791ZM32.6545 29.6719L29.4645 26.4809L26.4809 29.4645L29.6719 32.6544V36H36V29.6719H32.6545ZM6.53555 26.4809L3.34561 29.6719H0V36H6.32812V32.6545L9.51912 29.4645L6.53555 26.4809Z" fill="#FF5521" />
                                        <path d="M28.1266 0L19.3789 10.366L25.059 17.1053L35.9997 7.8731V0H28.1266ZM24.712 12.7791L23.2206 11.2877L30.7479 3.76038L32.2393 5.25178L24.712 12.7791Z" fill="#FF5521" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1164_638">
                                            <rect width="36" height="36" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>


                            </span>
                            <span className='profile-card-value'>
                                <span className=''>Battle Played</span>
                                <span className=''>2</span>
                            </span>
                        </li>
                        <li className='profile-card Referral'>
                            <span className='profile-icon'>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1164_655)">
                                        <path d="M28.9634 7.89C28.6907 7.89041 28.4272 7.7912 28.2224 7.611C25.3958 5.12618 21.762 3.75392 17.9984 3.75C14.4453 3.75562 11.0036 4.99047 8.25744 7.245C8.14319 7.33876 8.0116 7.40911 7.87016 7.45201C7.72873 7.49492 7.58022 7.50954 7.43314 7.49506C7.28605 7.48057 7.14325 7.43726 7.01291 7.36758C6.88256 7.29791 6.76721 7.20325 6.67344 7.089C6.57968 6.97475 6.50934 6.84315 6.46643 6.70172C6.42353 6.56028 6.4089 6.41178 6.42339 6.26469C6.45264 5.96763 6.59871 5.69436 6.82944 5.505C9.97867 2.92102 13.9248 1.50601 17.9984 1.5C22.3078 1.50383 26.4688 3.0744 29.7059 5.919C29.8773 6.07023 29.9985 6.26998 30.0536 6.49174C30.1088 6.7135 30.0952 6.94679 30.0146 7.16063C29.934 7.37447 29.7904 7.55875 29.6026 7.68902C29.4149 7.81929 29.192 7.88939 28.9634 7.89Z" fill="#8DBD49" />
                                        <path d="M10.875 7.50096H7.125C6.82663 7.50096 6.54048 7.38244 6.3295 7.17146C6.11853 6.96048 6 6.67433 6 6.37596V2.62596C6.0002 2.4036 6.06628 2.18629 6.18991 2.00147C6.31354 1.81664 6.48917 1.6726 6.69461 1.58753C6.90006 1.50247 7.12611 1.48019 7.3442 1.52352C7.5623 1.56684 7.76267 1.67383 7.92 1.83096L11.67 5.58096C11.8271 5.73829 11.9341 5.93866 11.9774 6.15676C12.0208 6.37486 11.9985 6.6009 11.9134 6.80635C11.8284 7.01179 11.6843 7.18742 11.4995 7.31105C11.3147 7.43468 11.0974 7.50077 10.875 7.50096ZM18.18 34.501C13.8705 34.4978 9.70927 32.9272 6.4725 30.082C6.3614 29.9845 6.2706 29.866 6.20527 29.7334C6.13994 29.6008 6.10137 29.4567 6.09176 29.3091C6.08215 29.1616 6.10169 29.0137 6.14926 28.8737C6.19682 28.7338 6.27149 28.6046 6.369 28.4935C6.46651 28.3824 6.58494 28.2916 6.71754 28.2262C6.85014 28.1609 6.99431 28.1223 7.14181 28.1127C7.43972 28.0933 7.73313 28.193 7.9575 28.39C10.7833 30.8753 14.4168 32.2476 18.18 32.251C21.7331 32.2453 25.1748 31.0105 27.921 28.756C28.1517 28.5666 28.4483 28.4766 28.7453 28.5059C29.0424 28.5352 29.3156 28.6812 29.505 28.912C29.6944 29.1427 29.7843 29.4392 29.7551 29.7363C29.7258 30.0333 29.5797 30.3066 29.349 30.496C26.1998 33.0799 22.2536 34.4949 18.18 34.501Z" fill="#8DBD49" />
                                        <path d="M28.874 34.5C28.7263 34.5002 28.58 34.4711 28.4435 34.4145C28.3071 34.3579 28.1832 34.2748 28.079 34.17L24.329 30.42C24.1719 30.2627 24.0649 30.0623 24.0216 29.8442C23.9782 29.6261 24.0005 29.4001 24.0856 29.1946C24.1706 28.9892 24.3147 28.8135 24.4995 28.6899C24.6843 28.5663 24.9017 28.5002 25.124 28.5H28.874C29.1724 28.5 29.4585 28.6185 29.6695 28.8295C29.8805 29.0405 29.999 29.3266 29.999 29.625V33.375C29.999 33.6734 29.8805 33.9595 29.6695 34.1705C29.4585 34.3815 29.1724 34.5 28.874 34.5Z" fill="#8DBD49" />
                                        <path d="M7.5 18C9.57107 18 11.25 16.3211 11.25 14.25C11.25 12.1789 9.57107 10.5 7.5 10.5C5.42893 10.5 3.75 12.1789 3.75 14.25C3.75 16.3211 5.42893 18 7.5 18Z" fill="#8DBD49" />
                                        <path d="M10.875 19.5H4.125C3.03123 19.5008 1.98248 19.9356 1.20906 20.7091C0.435647 21.4825 0.000794606 22.5312 0 23.625L0 24.375C0 24.996 0.504 25.5 1.125 25.5H13.875C14.1734 25.5 14.4595 25.3815 14.6705 25.1705C14.8815 24.9595 15 24.6734 15 24.375V23.625C14.9992 22.5312 14.5644 21.4825 13.7909 20.7091C13.0175 19.9356 11.9688 19.5008 10.875 19.5Z" fill="#8DBD49" />
                                        <path d="M28.5 18C30.5711 18 32.25 16.3211 32.25 14.25C32.25 12.1789 30.5711 10.5 28.5 10.5C26.4289 10.5 24.75 12.1789 24.75 14.25C24.75 16.3211 26.4289 18 28.5 18Z" fill="#8DBD49" />
                                        <path d="M31.875 19.5H25.125C24.0312 19.5008 22.9825 19.9356 22.2091 20.7091C21.4356 21.4825 21.0008 22.5312 21 23.625V24.375C21 24.996 21.504 25.5 22.125 25.5H34.875C35.1734 25.5 35.4595 25.3815 35.6705 25.1705C35.8815 24.9595 36 24.6734 36 24.375V23.625C35.9992 22.5312 35.5644 21.4825 34.7909 20.7091C34.0175 19.9356 32.9688 19.5008 31.875 19.5Z" fill="#8DBD49" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1164_655">
                                            <rect width="36" height="36" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>


                            </span>
                            <span className='profile-card-value'>
                                <span className=''>Referral</span>
                                <span className=''>7</span>
                            </span>
                        </li>
                        <li className='profile-card Wallet'>
                            <span className='profile-icon'>
                                <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.75 23V25.8125C31.75 27.3639 30.4878 28.625 28.9375 28.625H4.75C2.26825 28.625 0.25 26.6068 0.25 24.125V5C0.25 2.51825 2.26825 0.5 4.75 0.5H25.5625C25.7841 0.5 26.0035 0.543648 26.2083 0.628453C26.413 0.713258 26.599 0.837558 26.7557 0.994257C26.9124 1.15096 27.0367 1.33698 27.1215 1.54172C27.2064 1.74646 27.25 1.96589 27.25 2.1875C27.25 2.40911 27.2064 2.62854 27.1215 2.83328C27.0367 3.03802 26.9124 3.22404 26.7557 3.38074C26.599 3.53744 26.413 3.66174 26.2083 3.74655C26.0035 3.83135 25.7841 3.875 25.5625 3.875H4.75C4.46034 3.88796 4.18683 4.01215 3.98644 4.22171C3.78604 4.43126 3.6742 4.71005 3.6742 5C3.6742 5.28995 3.78604 5.56874 3.98644 5.7783C4.18683 5.98786 4.46034 6.11204 4.75 6.125H28.9375C30.4878 6.125 31.75 7.38613 31.75 8.9375V11.75H26.125C23.0234 11.75 20.5 14.2734 20.5 17.375C20.5 20.4766 23.0234 23 26.125 23H31.75Z" fill="#2091EF" />
                                    <path d="M31.75 14V20.75H26.125C25.2299 20.75 24.3714 20.3944 23.7385 19.7615C23.1056 19.1286 22.75 18.2701 22.75 17.375C22.75 16.4799 23.1056 15.6214 23.7385 14.9885C24.3714 14.3556 25.2299 14 26.125 14H31.75Z" fill="#2091EF" />
                                </svg>
                            </span>
                            <span className='profile-card-value'>
                                <span className='Wallet-link'> Wallet  <span> <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.12466 7C6.62782 6.73508 6.26016 6.54148 6.02168 6.41921C5.7832 6.29694 5.5944 6.19505 5.45528 6.11354C5.2963 6.03202 5.15718 5.9607 5.03794 5.89956C4.89883 5.83843 4.70009 5.73654 4.44173 5.59389C4.1635 5.45124 3.77597 5.24745 3.27913 4.98253C2.76242 4.73799 2.04697 4.39156 1.13279 3.94323C0.934056 3.82096 0.834689 3.61718 0.834689 3.33188C0.834689 3.14847 0.854562 2.87336 0.894309 2.50655C0.934056 2.13974 1.01355 1.76274 1.13279 1.37555C1.23216 1.00873 1.37127 0.682678 1.55014 0.39738C1.729 0.13246 1.96748 0 2.26558 0C2.52394 0 2.8916 0.101891 3.36856 0.305676C3.84553 0.50946 4.38211 0.774381 4.97832 1.10044C5.55465 1.44687 6.15086 1.81368 6.76694 2.20087C7.38302 2.60844 7.96929 3.00582 8.52575 3.39301C9.06233 3.7802 9.5393 4.12664 9.95664 4.43231C10.3541 4.75837 10.6224 5.0131 10.7615 5.19651C10.8808 5.35953 10.9503 5.49199 10.9702 5.59389C10.9901 5.71616 11 5.83843 11 5.9607L10.8808 7.82533C10.8609 8.11063 10.8112 8.3246 10.7317 8.46725C10.6323 8.6099 10.4833 8.76274 10.2846 8.92576C10.0659 9.08879 9.69828 9.32314 9.18157 9.62882C8.66486 9.95488 8.07859 10.3013 7.42276 10.6681C6.76694 11.0553 6.07136 11.4425 5.33604 11.8297C4.60072 12.2373 3.90515 12.5939 3.24932 12.8996C2.57362 13.2256 1.97742 13.4905 1.4607 13.6943C0.943993 13.8981 0.576333 14 0.357724 14C0.119242 14 0 13.8675 0 13.6026C0 12.8486 0.0298104 12.2373 0.0894308 11.7686C0.149051 11.2999 0.248419 10.9127 0.387534 10.607C0.526649 10.3217 0.695574 10.0873 0.894309 9.90393C1.09304 9.7409 1.33153 9.57787 1.60976 9.41485C1.90786 9.25182 2.22584 9.08879 2.56369 8.92576C2.88166 8.76274 3.25926 8.58952 3.69648 8.40611C4.11382 8.22271 4.61066 8.01892 5.18699 7.79476C5.74345 7.5706 6.38934 7.30568 7.12466 7Z" fill="black" />
                                </svg>
                                </span> </span>
                            </span>
                        </li>
                    </ul>
                    <div className="profile-wrapper">
                        {/* Profile Info */}
                        <div className="profile-details-card">
                            <div className="info-row">
                                <span className="card-label">Name</span>
                                <span className="card-value">V6SNAH</span>
                            </div>
                            <div className="info-row">
                                <span className="card-label">Mobile Number</span>
                                <span className="card-value">+91 874 085 5331</span>
                            </div>
                            <div className="info-row">
                                <span className="card-label">Gmail</span>
                                <span className="card-value">dy937673@gmail.com</span>
                            </div>
                            <button className="btn theme-btn edit-btn" onClick={() => setIsOpen(true)} >Edit Profile</button>
                        </div>
                        <Modal
                            isOpen={isOpen}
                            onRequestClose={() => setIsOpen(false)}
                            style={{
                                content: {
                                    maxWidth: '400px',
                                    minWidth: '388px',
                                    margin: 'auto',
                                    padding: '20px',
                                    borderRadius: '22px',
                                    inset: '50% auto auto 50%',
                                    transform: 'translate(-50%, -50%)',
                                },
                            }}
                        >
                            <button onClick={() => 
                                
                                
                                setIsOpen(false)} className='btn-close modal-close-btn' >X</button>
                           
                            <h4 className="font-26">Edit Profile</h4>
                            <form action="">
                                <div className='form-group'>
                                    <input type="text" placeholder='Name' className='form-control' />
                                </div>
                                <div className='form-group'>
                                    <input type="text" placeholder='User Name' className='form-control' />
                                </div>
                                <div className='form-group'>
                                    <input type="text" placeholder='Email' className='form-control' />
                                </div>
                                <div className='form-group'>
                                    <input type="text" placeholder='Phone Number' className='form-control' />
                                </div>

                                <button type='submit' className='btn theme-btn save-changes'> Save Changes </button>
                            </form>


                        </Modal>

                        <div className="kyc-section">
                            <div className="kyc-left">
                                <span className="kyc-card-label">KYC Status</span>
                                <span className="kyc-pending">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1164_559)">
                                            <path d="M10.0005 13.707C9.44135 13.707 8.97266 14.1757 8.97266 14.7349C8.97266 15.294 9.44135 15.7627 10.0005 15.7627C10.5391 15.7627 11.0283 15.294 11.0036 14.7595C11.0283 14.1716 10.5637 13.707 10.0005 13.707Z" fill="#E7232E" />
                                            <path d="M19.5133 17.3498C20.1588 16.2357 20.1629 14.9077 19.5215 13.7977L13.0832 2.64779C12.446 1.52541 11.2948 0.859375 10.0039 0.859375C8.71291 0.859375 7.56175 1.52952 6.92449 2.64368L0.477959 13.8059C-0.163405 14.9283 -0.159294 16.2645 0.490293 17.3786C1.13166 18.4804 2.27871 19.1424 3.56144 19.1424H16.4216C17.7085 19.1424 18.8637 18.4722 19.5133 17.3498ZM18.1155 16.544C17.7578 17.1607 17.1247 17.5266 16.4175 17.5266H3.55733C2.85841 17.5266 2.22938 17.1689 1.87992 16.5646C1.52634 15.952 1.52223 15.2202 1.8758 14.6035L8.32234 3.44539C8.6718 2.8328 9.29672 2.47101 10.0039 2.47101C10.7069 2.47101 11.3359 2.83691 11.6854 3.4495L18.1278 14.6076C18.4732 15.2078 18.4691 15.9314 18.1155 16.544Z" fill="#E7232E" />
                                            <path d="M9.74661 6.49191C9.25736 6.63169 8.95312 7.07571 8.95312 7.6143C8.97779 7.93909 8.99835 8.26799 9.02302 8.59279C9.09291 9.83029 9.1628 11.0431 9.23269 12.2806C9.25736 12.7 9.58216 13.0042 10.0015 13.0042C10.4209 13.0042 10.7498 12.6794 10.7703 12.256C10.7703 12.0011 10.7703 11.7667 10.795 11.5077C10.8402 10.7142 10.8896 9.92074 10.9348 9.12726C10.9594 8.61334 11.0047 8.09943 11.0293 7.58552C11.0293 7.40051 11.0047 7.23605 10.9348 7.0716C10.7251 6.61114 10.2359 6.37679 9.74661 6.49191Z" fill="#E7232E" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1164_559">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Pending
                                </span>
                            </div>
                            <button className="btn theme-btn kyc-btn">Complete KYC</button>
                        </div>

                        <div className="whatsapp-icon">
                            <a href="https://wa.me/" target="_blank" rel="noreferrer">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 30L2.10103 22.5459C0.749946 20.2531 0.0385887 17.6444 0.0385887 14.9645C0.0385887 6.71305 6.75893 0 15.0193 0C23.2798 0 30 6.71305 30 14.9645C30 23.216 23.2798 29.929 15.0193 29.929C12.4455 29.929 9.92511 29.2709 7.69551 28.0212L0 30ZM8.08893 25.2987L8.54748 25.5784C10.4914 26.7639 12.7294 27.3905 15.0193 27.3905C21.8785 27.3905 27.4588 21.8162 27.4588 14.9645C27.4588 8.11278 21.8785 2.53848 15.0193 2.53848C8.16018 2.53848 2.57982 8.11278 2.57982 14.9645C2.57982 17.3519 3.25908 19.6703 4.54401 21.669L4.85281 22.1493L3.6429 26.442L8.08893 25.2987Z" fill="white" />
                                    <path d="M10.8186 7.55789L9.86017 7.50191C9.55936 7.48402 9.26386 7.59232 9.0363 7.80386C8.57165 8.23615 7.8287 9.07191 7.6005 10.161C7.26021 11.7849 7.7861 13.7733 9.14719 15.7618C10.5083 17.7503 13.0448 20.9318 17.5301 22.2907C18.9754 22.7285 20.1124 22.4333 20.9896 21.8321C21.6844 21.356 22.1633 20.5917 22.336 19.7277L22.489 18.962C22.5126 18.8438 22.498 18.7205 22.4475 18.6125C22.397 18.5044 22.3137 18.418 22.2112 18.3674L18.9721 16.7678C18.87 16.7174 18.7549 16.7056 18.6457 16.7343C18.5365 16.763 18.4397 16.8306 18.371 16.926L17.0994 18.6921C17.0527 18.7572 16.988 18.8049 16.9146 18.8283C16.8412 18.8517 16.7627 18.8497 16.6904 18.8226C15.8196 18.4947 12.9025 17.1858 11.3019 13.8825C11.2677 13.8127 11.2538 13.7335 11.2621 13.6552C11.2703 13.5769 11.3003 13.503 11.3482 13.4432L12.5635 11.9369C12.6244 11.8615 12.6642 11.7693 12.6785 11.6708C12.6928 11.5724 12.681 11.4716 12.6444 11.3799L11.2482 7.88012C11.2118 7.78882 11.1522 7.71026 11.0763 7.65331C11.0004 7.59637 10.9111 7.56331 10.8186 7.55789Z" fill="white" />
                                </svg>
                            </a>
                        </div>

                        <button className="btn theme-btn logout-btn">Logout</button>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default MyProfile