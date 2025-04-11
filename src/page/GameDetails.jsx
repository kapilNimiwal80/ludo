import React, { useState } from 'react'
import Layout from '../layouts'
import { Link } from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';
import ReusableModal from '../components/ReusableModal';


const GameDetails = () => {
    const [modalType, setModalType] = useState(null);


    const [previewImage, setPreviewImage] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Create a URL for the selected file
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl);
        }
    };
    const handleOpen = (type) => setModalType(type);
    const handleClose = () => setModalType(null);

    const handleSubmit = (data) => {
        alert(`Submitted: ${data}`);
        handleClose();
    };
    return (
        <>
            <Layout>
                <div className='game-list-container'>
                    <div className="top-bar">
                        <Link to="/game-list" className="back-link"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 10.0025C1 9.66148 1.13545 9.33447 1.37656 9.09336C1.61767 8.85225 1.94469 8.7168 2.28567 8.7168H17.7137C18.0547 8.7168 18.3817 8.85225 18.6228 9.09336C18.8639 9.33447 18.9993 9.66148 18.9993 10.0025C18.9993 10.3434 18.8639 10.6705 18.6228 10.9116C18.3817 11.1527 18.0547 11.2881 17.7137 11.2881H2.28567C1.94469 11.2881 1.61767 11.1527 1.37656 10.9116C1.13545 10.6705 1 10.3434 1 10.0025Z" fill="black" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.6227 17.3405C9.3816 17.5816 9.05464 17.717 8.71373 17.717C8.37282 17.717 8.04586 17.5816 7.80476 17.3405L1.37643 10.9122C1.1354 10.6711 1 10.3442 1 10.0032C1 9.66233 1.1354 9.33537 1.37643 9.09427L7.80476 2.66594C7.92336 2.54314 8.06523 2.4452 8.22209 2.37782C8.37894 2.31044 8.54765 2.27497 8.71836 2.27349C8.88907 2.272 9.05836 2.30453 9.21637 2.36918C9.37437 2.43382 9.51792 2.52929 9.63863 2.65C9.75935 2.77072 9.85481 2.91426 9.91946 3.07227C9.9841 3.23027 10.0166 3.39957 10.0151 3.57028C10.0137 3.74099 9.9782 3.90969 9.91082 4.06655C9.84344 4.22341 9.74549 4.36527 9.6227 4.48387L4.10333 10.0032L9.6227 15.5226C9.86372 15.7637 9.99912 16.0907 9.99912 16.4316C9.99912 16.7725 9.86372 17.0994 9.6227 17.3405Z" fill="black" />
                        </svg>
                            BACK</Link>
                        <span className="rules-link">RULES</span>
                    </div>
                    <div className="battleBox">
                        <div className="battle-title">
                            <div className="battle-text">Playing for
                                <span className='ms-2'><img src="/coinSvg.png" alt="" /> 195</span></div>

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

                    <div className='room-code-box'>
                        <div className="waiting">
                            <p className='Waiting-code'>Waiting for Room Code</p>
                            <p className="room-code">कमरे कोड का इंतज़ार है | [287]</p>
                            <div className="loaderBox">
                                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1108_1712)">
                                        <path d="M9.06949 39.7054C11.7787 39.7054 13.9749 37.5092 13.9749 34.8C13.9749 32.0908 11.7787 29.8945 9.06949 29.8945C6.3603 29.8945 4.16406 32.0908 4.16406 34.8C4.16406 37.5092 6.3603 39.7054 9.06949 39.7054Z" fill="#909BA6" />
                                        <path d="M40.6325 35.3569C42.9839 35.3569 44.8901 33.4507 44.8901 31.0993C44.8901 28.748 42.9839 26.8418 40.6325 26.8418C38.2812 26.8418 36.375 28.748 36.375 31.0993C36.375 33.4507 38.2812 35.3569 40.6325 35.3569Z" fill="#C8D2DC" />
                                        <path d="M36.7437 13.8838C38.6861 13.8838 40.2608 12.3092 40.2608 10.3667C40.2608 8.42427 38.6861 6.84961 36.7437 6.84961C34.8012 6.84961 33.2266 8.42427 33.2266 10.3667C33.2266 12.3092 34.8012 13.8838 36.7437 13.8838Z" fill="#E9EDF1" />
                                        <path d="M5.20577 27.732C8.08084 27.732 10.4115 25.4581 10.4115 22.6531C10.4115 19.8481 8.08084 17.5742 5.20577 17.5742C2.3307 17.5742 0 19.8481 0 22.6531C0 25.4581 2.3307 27.732 5.20577 27.732Z" fill="#7E8B96" />
                                        <path d="M20.1622 46.0005C22.7759 46.0005 24.8948 43.9358 24.8948 41.3889C24.8948 38.842 22.7759 36.7773 20.1622 36.7773C17.5485 36.7773 15.4297 38.842 15.4297 41.3889C15.4297 43.9358 17.5485 46.0005 20.1622 46.0005Z" fill="#A2ABB8" />
                                        <path d="M32.324 43.9798C34.807 43.9798 36.8199 42.0199 36.8199 39.6022C36.8199 37.1845 34.807 35.2246 32.324 35.2246C29.841 35.2246 27.8281 37.1845 27.8281 39.6022C27.8281 42.0199 29.841 43.9798 32.324 43.9798Z" fill="#B9C3CD" />
                                        <path d="M10.8369 15.9373C13.8426 15.9373 16.2792 13.5589 16.2792 10.6249C16.2792 7.69094 13.8426 5.3125 10.8369 5.3125C7.83115 5.3125 5.39453 7.69094 5.39453 10.6249C5.39453 13.5589 7.83115 15.9373 10.8369 15.9373Z" fill="#5F6C75" />
                                        <path d="M41.9758 23.984C44.1974 23.984 45.9984 22.2164 45.9984 20.0359C45.9984 17.8555 44.1974 16.0879 41.9758 16.0879C39.7541 16.0879 37.9531 17.8555 37.9531 20.0359C37.9531 22.2164 39.7541 23.984 41.9758 23.984Z" fill="#DCE6EB" />
                                        <path d="M24.3439 11.4769C27.5131 11.4769 30.0823 8.90768 30.0823 5.73843C30.0823 2.56918 27.5131 0 24.3439 0C21.1747 0 18.6055 2.56918 18.6055 5.73843C18.6055 8.90768 21.1747 11.4769 24.3439 11.4769Z" fill="#4E5A61" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1108_1712">
                                            <rect width="46" height="46" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className='setCode'>
                            <input type="text" placeholder='Set Code' className='setInput' />
                            <button className='set-btn'> Set </button>
                        </div>
                        <div className='RemainingTime'>
                            Remaining Time: <strong>277 seconds</strong>
                        </div>
                        <div className="warning">
                            मना किया जायेगा | इसलिए कृपया ऐसी गलती ना करें
                        </div>
                    </div>

                    <div className='room-code-copy room-code-box'>
                        <div className='RemainingTime'>
                            Room Code <strong>01234467</strong>
                        </div>
                        <button className='won yellow-btn btn-lg'> Copy Code </button>
                    </div>

                    <div className="play-instruction">
                        <h3 className='font-20'>PLAY LUDO GAME IN LUDO KING APP</h3>
                        <div className="store-buttons">
                            <img src="/app-store.png" alt="App Store" />
                            <img src="/google-play.png" alt="Google Play" />
                        </div>
                    </div>

                    <div className="rules-section">
                        <p className="info-text border-bottom">
                            यह LudoClassicManual है जहां आप SET ROOM CODE के जरिए गेम को सेट करते हैं।
                            अगर कोई भी गलत तरीका दिखा तो Penalty लगाई जाएगी।
                        </p>

                        <h4 className='font-20'>GAME RULES</h4>
                        <ul className='rules-list'>
                            <li><p className='info-text'>Record every game while playing.</p></li>
                            <li> <p className='
                            info-text'>For cancellation of game, video proof is necessary. </p> </li>
                            <li> <p className='info-text'>महत्वपूर्ण नोट:कृपया गलत गेम परिणाम अपलोड न करें, अन्यथा आपके वॉलेट बैलेंस पर penalty लगाई जायगी। गलत रिजल्ट अपडेट करने पर 50 रुपये पेनल्टी लगेगी।</p></li>
                            <li> <p className='info-text'>महत्वपूर्ण नोट: यदि आप गेम के परिणामों को अपडेट नहीं करते हैं, तो आपके वॉलेट बैलेंस पर जुर्माना लगाया जाएगा। रिजल्ट अपडेट नहीं करने पर 25 रुपये पेनल्टी लगेगी।</p>

                            </li>
                        </ul>

                        <h4 className='
                        font-20'>MATCH STATUS</h4>
                        <p className='
                        info-text'>After completion of your game, select the status of the game and post your screenshot below.</p>
                    </div>

                    <div className="match-buttons">
                        <button onClick={() => handleOpen('won')} className="won yellow-btn btn-lg">I WON</button>
                        <button onClick={() => handleOpen('lost')} className="lost yellow-btn delete-btn btn-lg">I LOST</button>
                        <button onClick={() => handleOpen('cancel')} className="cancel yellow-btn cancel-btn btn-lg">CANCEL</button>
                    </div>
                </div>

                <ReusableModal
                isOpen={!!modalType}
                onClose={handleClose}
                onSubmit={handleSubmit}
                type={modalType}
            />
            </Layout>
        </>
    )
}

export default GameDetails