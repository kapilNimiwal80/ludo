import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Layout from '../layouts'
import { Link } from 'react-router-dom';

const walletHistory = () => {
    return (
        <>
            <Layout>
                <div className='wallet-mainBox'>
                    <div className='wallet-header'>
                        <div className='back-btn'>
                            <Link to="my-wallet" >
                                <span className='back-icon'> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 10.0025C1 9.66148 1.13545 9.33447 1.37656 9.09336C1.61767 8.85225 1.94469 8.7168 2.28567 8.7168H17.7137C18.0547 8.7168 18.3817 8.85225 18.6228 9.09336C18.8639 9.33447 18.9993 9.66148 18.9993 10.0025C18.9993 10.3434 18.8639 10.6705 18.6228 10.9116C18.3817 11.1527 18.0547 11.2881 17.7137 11.2881H2.28567C1.94469 11.2881 1.61767 11.1527 1.37656 10.9116C1.13545 10.6705 1 10.3434 1 10.0025Z" fill="black" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.6227 17.3405C9.3816 17.5816 9.05464 17.717 8.71373 17.717C8.37282 17.717 8.04586 17.5816 7.80476 17.3405L1.37643 10.9122C1.1354 10.6711 1 10.3442 1 10.0032C1 9.66233 1.1354 9.33537 1.37643 9.09427L7.80476 2.66594C7.92336 2.54314 8.06523 2.4452 8.22209 2.37782C8.37894 2.31044 8.54765 2.27497 8.71836 2.27349C8.88907 2.272 9.05836 2.30453 9.21637 2.36918C9.37437 2.43382 9.51792 2.52929 9.63863 2.65C9.75935 2.77072 9.85481 2.91426 9.91946 3.07227C9.9841 3.23027 10.0166 3.39957 10.0151 3.57028C10.0137 3.74099 9.9782 3.90969 9.91082 4.06655C9.84344 4.22341 9.74549 4.36527 9.6227 4.48387L4.10333 10.0032L9.6227 15.5226C9.86372 15.7637 9.99912 16.0907 9.99912 16.4316C9.99912 16.7725 9.86372 17.0994 9.6227 17.3405Z" fill="black" />
                                </svg>
                                    <span className='back-text page-title'>  Back</span>
                                </span>
                            </Link>
                        </div>
                        <div className='page-title'>
                            History
                        </div>
                        <div className='history-link'>
                        </div>
                    </div>
                    <Tabs>
                        <TabList>
                            <Tab>wallet</Tab>
                            <Tab>Game</Tab>
                            <Tab>Penalty</Tab>
                            <Tab>Bonus</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="profile-details-card">
                                <div className="info-row">
                                    <span className="card-label">Cash Added</span>
                                    <span className="card-value">(+)
                                        ₹ 1000.00</span>
                                </div>
                                <div className="info-row">
                                    <span className="card-label">Order</span>
                                    <span className="card-value">000268</span>
                                </div>
                                <div className="info-row">
                                    <span className="card-label">Status</span>
                                    <span className="card-value">Credit</span>
                                </div>
                                <div className="info-row">
                                    <span className="card-label">Date</span>
                                    <span className="card-value">Apr 10 12:47 PM</span>
                                </div>
                                <div className='histoy-bottom'>
                                    <div>
                                        Withdrawal Request Cancel
                                    </div>
                                </div>
                            </div>
                            <div className="profile-details-card">
                                <div className="info-row">
                                    <span className="card-label">Cash Added</span>
                                    <span className="card-value">(+)
                                        ₹ 1000.00</span>
                                </div>
                                <div className="info-row">
                                    <span className="card-label">Order</span>
                                    <span className="card-value">000268</span>
                                </div>
                                <div className="info-row">
                                    <span className="card-label">Status</span>
                                    <span className="card-value">Credit</span>
                                </div>
                                <div className="info-row">
                                    <span className="card-label">Date</span>
                                    <span className="card-value">Apr 10 12:47 PM</span>
                                </div>
                                <div className='histoy-bottom'>
                                    <div>
                                        Battle Amount locked for battle #338013
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="profile-details-card">
                                <div className="info-row">
                                    <span className="card-label">Game Amount</span>
                                    <span className="card-value">₹
                                        100.00</span>
                                </div>
                                <div className="info-row">
                                    <span className="card-label">Player Name</span>
                                    <span className="card-value">New</span>
                                </div>
                                <div className="info-row">
                                    <span className="card-label">Battle ID</span>
                                    <span className="card-value">338013</span>
                                </div>
                                <div className="info-row">
                                    <span className="card-label">Status</span>
                                    <span className="card-value">Canceled</span>
                                </div>
                                <div className="info-row">
                                    <span className="card-label">Closing Balance</span>
                                    <span className="card-value">₹ 5690</span>
                                </div>
                                <div className="info-row">
                                    <span className="card-label">Date</span>
                                    <span className="card-value">Apr 10 11:18 AM    </span>
                                </div>
                                <div className='histoy-bottom'>
                                    <div>
                                        Match Cancelled
                                    </div>
                                    <a href="#" className='chat-btn' >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.00088 14.8667C6.79924 14.8744 5.61541 14.5761 4.56088 14C4.53975 13.9912 4.51709 13.9867 4.49421 13.9867C4.47132 13.9867 4.44867 13.9912 4.42754 14L2.07421 14.6667C1.93018 14.7125 1.77634 14.718 1.62941 14.6825C1.48249 14.647 1.34812 14.5719 1.2409 14.4653C1.13367 14.3588 1.05771 14.2249 1.02127 14.0782C0.984832 13.9315 0.989306 13.7777 1.03421 13.6333L1.74088 11.2667C1.75622 11.2258 1.75622 11.1808 1.74088 11.14C1.01814 9.81907 0.729819 8.30406 0.916821 6.80999C1.10382 5.31593 1.75665 3.91872 2.78266 2.81667C3.80866 1.71462 5.1557 0.963724 6.63261 0.670551C8.10951 0.377377 9.64123 0.556824 11.0104 1.18342C12.3795 1.81002 13.5165 2.85194 14.26 4.16129C15.0035 5.47064 15.3157 6.98091 15.1524 8.47774C14.989 9.97457 14.3583 11.3819 13.3498 12.5C12.3413 13.6181 11.0063 14.3902 9.53421 14.7067C9.02979 14.8115 8.51607 14.8651 8.00088 14.8667ZM4.47421 12.9533C4.67213 12.956 4.86649 13.0063 5.04088 13.1C5.90362 13.5731 6.86705 13.833 7.8507 13.8577C8.83435 13.8825 9.80965 13.6716 10.6951 13.2425C11.5806 12.8135 12.3506 12.1788 12.9407 11.3914C13.5308 10.604 13.9239 9.68688 14.0873 8.71656C14.2506 7.74625 14.1793 6.75094 13.8795 5.81379C13.5796 4.87663 13.0598 4.02483 12.3636 3.32954C11.6674 2.63426 10.8148 2.11567 9.87727 1.81711C8.9397 1.51855 7.9443 1.44867 6.97421 1.61333C6.00225 1.77481 5.08327 2.16733 4.29458 2.75788C3.50589 3.34843 2.87053 4.11974 2.44196 5.00693C2.01339 5.89412 1.80413 6.87126 1.83179 7.85616C1.85944 8.84105 2.1232 9.80491 2.60088 10.6667C2.67598 10.8027 2.72348 10.9522 2.74064 11.1067C2.75781 11.2611 2.74429 11.4174 2.70088 11.5667L2.08088 13.6267L4.14088 13.0067C4.24877 12.9726 4.36108 12.9547 4.47421 12.9533Z" fill="black" />
                                            <path d="M5.33333 8.83332C5.79357 8.83332 6.16667 8.46023 6.16667 7.99999C6.16667 7.53975 5.79357 7.16666 5.33333 7.16666C4.8731 7.16666 4.5 7.53975 4.5 7.99999C4.5 8.46023 4.8731 8.83332 5.33333 8.83332Z" fill="black" />
                                            <path d="M8.0013 8.83332C8.46154 8.83332 8.83464 8.46023 8.83464 7.99999C8.83464 7.53975 8.46154 7.16666 8.0013 7.16666C7.54106 7.16666 7.16797 7.53975 7.16797 7.99999C7.16797 8.46023 7.54106 8.83332 8.0013 8.83332Z" fill="black" />
                                            <path d="M10.6673 8.83332C11.1276 8.83332 11.5007 8.46023 11.5007 7.99999C11.5007 7.53975 11.1276 7.16666 10.6673 7.16666C10.2071 7.16666 9.83398 7.53975 9.83398 7.99999C9.83398 8.46023 10.2071 8.83332 10.6673 8.83332Z" fill="black" />
                                        </svg>
                                        Chat
                                    </a>
                                </div>
                            </div>
                            <div className="profile-details-card">
                                <div className="info-row">
                                    <span className="card-label">Game Amount</span>
                                    <span className="card-value">₹
                                        100.00</span>
                                </div>
                                <div className="info-row">
                                    <span className="card-label">Player Name</span>
                                    <span className="card-value">New</span>
                                </div>
                                <div className="info-row">
                                    <span className="card-label">Battle ID</span>
                                    <span className="card-value">338013</span>
                                </div>
                                <div className="info-row">
                                    <span className="card-label">Status</span>
                                    <span className="card-value">Lost Against</span>
                                </div>
                                <div className="info-row">
                                    <span className="card-label">Closing Balance</span>
                                    <span className="card-value">₹ 5690</span>
                                </div>
                                <div className="info-row">
                                    <span className="card-label">Date</span>
                                    <span className="card-value">Apr 10 11:18 AM    </span>
                                </div>
                                <div className='histoy-bottom'>
                                    <div>
                                        Losing Amount: ₹ 285
                                    </div>
                                    <a href="#" className='chat-btn' >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.00088 14.8667C6.79924 14.8744 5.61541 14.5761 4.56088 14C4.53975 13.9912 4.51709 13.9867 4.49421 13.9867C4.47132 13.9867 4.44867 13.9912 4.42754 14L2.07421 14.6667C1.93018 14.7125 1.77634 14.718 1.62941 14.6825C1.48249 14.647 1.34812 14.5719 1.2409 14.4653C1.13367 14.3588 1.05771 14.2249 1.02127 14.0782C0.984832 13.9315 0.989306 13.7777 1.03421 13.6333L1.74088 11.2667C1.75622 11.2258 1.75622 11.1808 1.74088 11.14C1.01814 9.81907 0.729819 8.30406 0.916821 6.80999C1.10382 5.31593 1.75665 3.91872 2.78266 2.81667C3.80866 1.71462 5.1557 0.963724 6.63261 0.670551C8.10951 0.377377 9.64123 0.556824 11.0104 1.18342C12.3795 1.81002 13.5165 2.85194 14.26 4.16129C15.0035 5.47064 15.3157 6.98091 15.1524 8.47774C14.989 9.97457 14.3583 11.3819 13.3498 12.5C12.3413 13.6181 11.0063 14.3902 9.53421 14.7067C9.02979 14.8115 8.51607 14.8651 8.00088 14.8667ZM4.47421 12.9533C4.67213 12.956 4.86649 13.0063 5.04088 13.1C5.90362 13.5731 6.86705 13.833 7.8507 13.8577C8.83435 13.8825 9.80965 13.6716 10.6951 13.2425C11.5806 12.8135 12.3506 12.1788 12.9407 11.3914C13.5308 10.604 13.9239 9.68688 14.0873 8.71656C14.2506 7.74625 14.1793 6.75094 13.8795 5.81379C13.5796 4.87663 13.0598 4.02483 12.3636 3.32954C11.6674 2.63426 10.8148 2.11567 9.87727 1.81711C8.9397 1.51855 7.9443 1.44867 6.97421 1.61333C6.00225 1.77481 5.08327 2.16733 4.29458 2.75788C3.50589 3.34843 2.87053 4.11974 2.44196 5.00693C2.01339 5.89412 1.80413 6.87126 1.83179 7.85616C1.85944 8.84105 2.1232 9.80491 2.60088 10.6667C2.67598 10.8027 2.72348 10.9522 2.74064 11.1067C2.75781 11.2611 2.74429 11.4174 2.70088 11.5667L2.08088 13.6267L4.14088 13.0067C4.24877 12.9726 4.36108 12.9547 4.47421 12.9533Z" fill="black" />
                                            <path d="M5.33333 8.83332C5.79357 8.83332 6.16667 8.46023 6.16667 7.99999C6.16667 7.53975 5.79357 7.16666 5.33333 7.16666C4.8731 7.16666 4.5 7.53975 4.5 7.99999C4.5 8.46023 4.8731 8.83332 5.33333 8.83332Z" fill="black" />
                                            <path d="M8.0013 8.83332C8.46154 8.83332 8.83464 8.46023 8.83464 7.99999C8.83464 7.53975 8.46154 7.16666 8.0013 7.16666C7.54106 7.16666 7.16797 7.53975 7.16797 7.99999C7.16797 8.46023 7.54106 8.83332 8.0013 8.83332Z" fill="black" />
                                            <path d="M10.6673 8.83332C11.1276 8.83332 11.5007 8.46023 11.5007 7.99999C11.5007 7.53975 11.1276 7.16666 10.6673 7.16666C10.2071 7.16666 9.83398 7.53975 9.83398 7.99999C9.83398 8.46023 10.2071 8.83332 10.6673 8.83332Z" fill="black" />
                                        </svg>
                                        Chat
                                    </a>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                        <TabPanel>
                            <div className="profile-details-card">
                                <div className="info-row">
                                    <span className="card-label">Bonus added</span>
                                    <span className="card-value">(+)
                                    ₹ 5000.00</span>
                                </div>
                                <div className="info-row">
                                    <span className="card-label">Order ID</span>
                                    <span className="card-value">0001</span>
                                </div>
                                <div className="info-row">
                                    <span className="card-label">Closing Balance</span>
                                    <span className="card-value">₹ 5000</span>
                                </div>
                                <div className="info-row">
                                    <span className="card-label">Date</span>
                                    <span className="card-value">Mar 29 8:37 AM</span>
                                </div>
                              
                                <div className='histoy-bottom'>
                                    <div>
                                        ADD
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>

                </div>
            </Layout>
        </>
    )
}

export default walletHistory