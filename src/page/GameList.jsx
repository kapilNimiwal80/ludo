import React from 'react'
import Layout from '../layouts'
import { Link } from 'react-router-dom'

const GameList = () => {
    return (
        <Layout>
            <div className="game-list-container">
                <div className="EntryAmountBox">
                    <input className='EntryAmount' placeholder='ENTRY AMOUNT' type="text" />
                    <img src="/wallet-icon.png" className='wallet-i' alt="" />
                    <button className="yellow-btn btn-lg">SET</button>
                </div>
                <div className="battle-heading">
                    <h2 className=""><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1108_751)">
                            <path d="M19 1H16V0H4V1H1C0.4 1 0 1.4 0 2V4.4C0 6.7 1.7 8.6 4 8.9V9C4 11.9 6 14.3 8.7 14.9L8 17H5.7C5.3 17 4.9 17.3 4.8 17.7L4 20H16L15.2 17.7C15.1 17.3 14.7 17 14.3 17H12L11.3 14.9C14 14.3 16 11.9 16 9V8.9C18.3 8.6 20 6.7 20 4.4V2C20 1.4 19.6 1 19 1ZM4 6.9C2.9 6.6 2 5.6 2 4.4V3H4V6.9ZM12 10L10 8.9L8 10L8.5 8L7 6H9.1L10 4L10.9 6H13L11.5 8L12 10ZM18 4.4C18 5.6 17.1 6.7 16 6.9V3H18V4.4Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1108_751">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                        Open Battle</h2>
                    <a href='#' className="rules-link">Rules</a>
                </div>
                <div className='battle-conatiner'>
                    <div className="battleBox">
                        <div className="battle-title">
                            <div className="battle-text">Challenge form NEZJ07</div>
                            <button className="yellow-btn btn-md ms-auto">
                                Start
                            </button>
                            <button className="yellow-btn delete-btn    btn-md">
                                Reject
                            </button>
                        </div>
                        <div className="battle-details">
                            <div className="battle-Entry battle-text text-center">
                                <span className=''> Entry Fee</span> <span><img src="/coinSvg.png" alt="" /> 100</span>
                            </div>
                            <div className='battle-action'>
                                <div className='battle-price battle-text  text-center'>
                                    <span className='user-img'>
                                        <img src="/user2.png" alt="" />
                                    </span> <span>Yy2j</span>
                                </div>
                            </div>
                            <div className='battle-price battle-text  text-center'>
                                <span className=''> Price</span> <span><img src="/coinSvg.png" alt="" /> 100</span>
                            </div>
                        </div>
                    </div>
                    <div className="battleBox">
                        <div className="battle-title">
                            <div className="battle-text">Challenge from MEZJ07</div>
                            <button className="yellow-btn btn-md">
                                Play
                            </button>
                        </div>
                        <div className="battle-details">
                            <div className="battle-Entry battle-text text-center">
                                <span className=''> Entry Fee</span> <span><img src="/coinSvg.png" alt="" /> 100</span>
                            </div>
                            <div className='battle-action'>
                                <div className='loaderBox'>
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.1281 22.4418C6.65939 22.4418 7.90074 21.2004 7.90074 19.6691C7.90074 18.1378 6.65939 16.8965 5.1281 16.8965C3.59682 16.8965 2.35547 18.1378 2.35547 19.6691C2.35547 21.2004 3.59682 22.4418 5.1281 22.4418Z" fill="#909BA6" />
                                        <path d="M22.965 19.9848C24.2941 19.9848 25.3715 18.9074 25.3715 17.5783C25.3715 16.2493 24.2941 15.1719 22.965 15.1719C21.636 15.1719 20.5586 16.2493 20.5586 17.5783C20.5586 18.9074 21.636 19.9848 22.965 19.9848Z" fill="#C8D2DC" />
                                        <path d="M20.7692 7.84695C21.8671 7.84695 22.7571 6.95692 22.7571 5.85902C22.7571 4.76112 21.8671 3.87109 20.7692 3.87109C19.6713 3.87109 18.7812 4.76112 18.7812 5.85902C18.7812 6.95692 19.6713 7.84695 20.7692 7.84695Z" fill="#E9EDF1" />
                                        <path d="M2.94239 15.6749C4.56743 15.6749 5.88479 14.3897 5.88479 12.8043C5.88479 11.2188 4.56743 9.93359 2.94239 9.93359C1.31735 9.93359 0 11.2188 0 12.8043C0 14.3897 1.31735 15.6749 2.94239 15.6749Z" fill="#7E8B96" />
                                        <path d="M11.3937 26.0002C12.871 26.0002 14.0686 24.8332 14.0686 23.3936C14.0686 21.9541 12.871 20.7871 11.3937 20.7871C9.91635 20.7871 8.71875 21.9541 8.71875 23.3936C8.71875 24.8332 9.91635 26.0002 11.3937 26.0002Z" fill="#A2ABB8" />
                                        <path d="M18.2677 24.8587C19.6711 24.8587 20.8089 23.751 20.8089 22.3844C20.8089 21.0179 19.6711 19.9102 18.2677 19.9102C16.8643 19.9102 15.7266 21.0179 15.7266 22.3844C15.7266 23.751 16.8643 24.8587 18.2677 24.8587Z" fill="#B9C3CD" />
                                        <path d="M6.12689 9.00727C7.82578 9.00727 9.203 7.66294 9.203 6.00461C9.203 4.34629 7.82578 3.00195 6.12689 3.00195C4.428 3.00195 3.05078 4.34629 3.05078 6.00461C3.05078 7.66294 4.428 9.00727 6.12689 9.00727Z" fill="#5F6C75" />
                                        <path d="M23.7268 13.5568C24.9825 13.5568 26.0005 12.5577 26.0005 11.3253C26.0005 10.0928 24.9825 9.09375 23.7268 9.09375C22.4711 9.09375 21.4531 10.0928 21.4531 11.3253C21.4531 12.5577 22.4711 13.5568 23.7268 13.5568Z" fill="#DCE6EB" />
                                        <path d="M13.7591 6.48692C15.5504 6.48692 17.0025 5.03477 17.0025 3.24346C17.0025 1.45215 15.5504 0 13.7591 0C11.9678 0 10.5156 1.45215 10.5156 3.24346C10.5156 5.03477 11.9678 6.48692 13.7591 6.48692Z" fill="#4E5A61" />
                                    </svg>
                                </div>
                            </div>
                            <div className='battle-price battle-text  text-center'>
                                <span className=''> Price</span> <span><img src="/coinSvg.png" alt="" /> 100</span>
                            </div>
                        </div>
                    </div>
                    <div className="battleBox">
                        <div className="battle-title">
                            <div className="battle-text">Challenge from MEZJ07</div>
                            <button className="yellow-btn delete-btn  btn-md">
                                Delete
                            </button>
                        </div>
                        <div className="battle-details">
                            <div className="battle-Entry battle-text text-center">
                                <span className=''> Entry Fee</span> <span><img src="/coinSvg.png" alt="" /> 100</span>
                            </div>
                            <div className='battle-action'>

                            </div>
                            <div className='battle-price battle-text  text-center'>
                                <span className=''> Price</span> <span><img src="/coinSvg.png" alt="" /> 100</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Running Battles */}
                <div className="battle-heading">
                    <h2 className=""><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.08938 13.5747L6.21758 11.1543L5.62254 11.8603C5.27098 11.6579 4.87504 11.5411 4.45789 11.5411C3.83074 11.5411 3.24254 11.7843 2.80078 12.226L7.77266 17.1979C8.53703 16.4335 8.65285 15.2716 8.13852 14.376L9.08938 13.5747Z" fill="black" />
                        <path d="M15.5401 11.5409C15.1241 11.5409 14.7294 11.6571 14.3788 11.8584L4.37105 0H0V4.37105L11.8585 14.3788C11.346 15.2739 11.4623 16.4342 12.2259 17.1978L17.1977 12.2259C16.756 11.7841 16.1672 11.5409 15.5401 11.5409ZM6.27094 7.09949L2.0891 2.91766L2.91766 2.0891L7.09949 6.27094L6.27094 7.09949ZM18.1414 16.4844L16.3691 14.7116L14.7116 16.3691L16.4844 18.1413V20H20V16.4844H18.1414ZM3.63086 14.7116L1.85867 16.4844H0V20H3.51562V18.1414L5.2884 16.3691L3.63086 14.7116Z" fill="black" />
                        <path d="M15.6254 0L10.7656 5.75891L13.9212 9.50293L19.9994 4.37395V0H15.6254ZM13.7284 7.09949L12.8999 6.27094L17.0817 2.0891L17.9103 2.91766L13.7284 7.09949Z" fill="black" />
                    </svg>

                        Running Battles</h2>
                </div>
                <div className='battle-conatiner'>
                    <div className="battleBox">
                        <div className="battle-title">
                            <div className="battle-text">Playing for
                                <span className='ms-2'><img src="/coinSvg.png" alt="" /> 195</span></div>
                            <div className="battle-text">Price
                                <span className='ms-2'><img src="/coinSvg.png" alt="" /> 100</span></div>
                        </div>
                        <div className="battle-details">
                            <div className="battle-Entry battle-text text-center">
                                <span className='user-img'>
                                    <img src="/user1.png" alt="" />
                                </span> <span>Yy2j</span>
                            </div>
                            <div className='battle-action'>
                                <Link to="/game-detail" className='yellow-btn   btn-md'>
                                    View
                                </Link>
                            </div>
                            <div className='battle-price battle-text  text-center'>
                                <span className='user-img'>
                                    <img src="/user2.png" alt="" />
                                </span> <span>Yy2j</span>
                            </div>
                        </div>
                    </div>
                    <div className="battleBox">
                        <div className="battle-title">
                            <div className="battle-text">Playing for
                                <span className='ms-2'><img src="/coinSvg.png" alt="" /> 195</span></div>
                            <div className="battle-text">Price
                                <span className='ms-2'><img src="/coinSvg.png" alt="" /> 100</span></div>
                        </div>
                        <div className="battle-details">
                            <div className="battle-Entry battle-text text-center">
                                <span className='user-img'>
                                    <img src="/user1.png" alt="" />
                                </span> <span>Yy2j</span>
                            </div>
                            <div className='battle-action'>
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.1094 19.8618H17.6973C17.4169 19.8618 17.1895 20.0891 17.1895 20.3696C17.1895 20.65 17.4169 20.8774 17.6973 20.8774H20.1094C21.5794 20.8774 22.7754 19.6814 22.7754 18.2114C22.7754 16.7414 21.5794 15.5454 20.1094 15.5454H19.8555C18.9454 15.5454 18.2051 14.8051 18.2051 13.895C18.2051 12.985 18.9454 12.2446 19.8555 12.2446H22.2676C22.548 12.2446 22.7754 12.0172 22.7754 11.7368C22.7754 11.4564 22.548 11.229 22.2676 11.229H19.8555C18.3855 11.229 17.1895 12.425 17.1895 13.895C17.1895 15.365 18.3855 16.561 19.8555 16.561H20.1094C21.0194 16.561 21.7598 17.3014 21.7598 18.2114C21.7598 19.1215 21.0194 19.8618 20.1094 19.8618ZM10.4198 15.7599L16.9251 1.03333C17.0732 0.698074 16.8273 0.320312 16.4606 0.320312H0.558594C0.278129 0.320312 0.0507812 0.547711 0.0507812 0.828125V15.5547C0.0507812 15.8351 0.278129 16.0625 0.558594 16.0625H9.95521C10.1563 16.0625 10.3385 15.9438 10.4198 15.7599ZM7.16016 12.5058C6.94621 12.5213 6.75995 12.4053 6.67088 12.2305L2.6452 4.32964C2.51789 4.07975 2.61721 3.774 2.86711 3.64664C3.117 3.51923 3.42281 3.61866 3.55012 3.86855L7.16016 10.9537L10.7702 3.86855C10.8976 3.61861 11.2033 3.51933 11.4532 3.64664C11.7031 3.774 11.8024 4.07975 11.6751 4.32964L7.64943 12.2305C7.60424 12.3197 7.53364 12.3934 7.44655 12.4424C7.35945 12.4914 7.25979 12.5134 7.16016 12.5058Z" fill="black" />
                                    <path d="M25.4428 8.42578H16.1885C16.0907 8.42578 15.9949 8.45404 15.9128 8.50715C15.8306 8.56027 15.7656 8.63598 15.7254 8.72519L9.31865 22.9626C9.16757 23.2983 9.41366 23.6787 9.78172 23.6787H25.4428C25.7232 23.6787 25.9506 23.4513 25.9506 23.1709V8.93359C25.9506 8.65313 25.7232 8.42578 25.4428 8.42578ZM24.9349 22.6631H10.5671L16.5168 9.44141H24.9349V22.6631Z" fill="black" />
                                </svg>

                            </div>
                            <div className='battle-price battle-text  text-center'>
                                <span className='user-img'>
                                    <img src="/user2.png" alt="" />
                                </span> <span>Yy2j</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </Layout>
    )
}

export default GameList