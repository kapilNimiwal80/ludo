import React, { useState } from 'react'
import Layout from '../layouts'
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ManualPayment = () => {
    const [utr, setUtr] = useState('');
    const upiId = '8740855331-3@ybl';
    const [isOpen, setIsOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <Layout>
                <div className='wallet-mainBox'>
                    <div className="wallet-header">
                        <a href="/wallet-history/my-wallet">
                            <span className="back-icon">
                                {" "}
                                <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1 10.0025C1 9.66148 1.13545 9.33447 1.37656 9.09336C1.61767 8.85225 1.94469 8.7168 2.28567 8.7168H17.7137C18.0547 8.7168 18.3817 8.85225 18.6228 9.09336C18.8639 9.33447 18.9993 9.66148 18.9993 10.0025C18.9993 10.3434 18.8639 10.6705 18.6228 10.9116C18.3817 11.1527 18.0547 11.2881 17.7137 11.2881H2.28567C1.94469 11.2881 1.61767 11.1527 1.37656 10.9116C1.13545 10.6705 1 10.3434 1 10.0025Z"
                                        fill="black"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M9.6227 17.3405C9.3816 17.5816 9.05464 17.717 8.71373 17.717C8.37282 17.717 8.04586 17.5816 7.80476 17.3405L1.37643 10.9122C1.1354 10.6711 1 10.3442 1 10.0032C1 9.66233 1.1354 9.33537 1.37643 9.09427L7.80476 2.66594C7.92336 2.54314 8.06523 2.4452 8.22209 2.37782C8.37894 2.31044 8.54765 2.27497 8.71836 2.27349C8.88907 2.272 9.05836 2.30453 9.21637 2.36918C9.37437 2.43382 9.51792 2.52929 9.63863 2.65C9.75935 2.77072 9.85481 2.91426 9.91946 3.07227C9.9841 3.23027 10.0166 3.39957 10.0151 3.57028C10.0137 3.74099 9.9782 3.90969 9.91082 4.06655C9.84344 4.22341 9.74549 4.36527 9.6227 4.48387L4.10333 10.0032L9.6227 15.5226C9.86372 15.7637 9.99912 16.0907 9.99912 16.4316C9.99912 16.7725 9.86372 17.0994 9.6227 17.3405Z"
                                        fill="black"
                                    />
                                </svg>
                                <span className="back-text page-title"> Back</span>
                            </span>
                        </a>
                        <div className="page-title">Add Amount</div>
                        <div className="history-link">

                        </div>
                    </div>
                    <div className="alert-box">
                        आप दो तरीकों से कॉइन जोड़ सकते हैं: 1. UPI बटनः एक बॉक्स आएगा, उस पर क्लिक करें और लोडर को चलने दें। यह आपको आपके पेमेंट प्लेटफॉर्म पर ले जाएगा। 2. मैनुअल पेमेंट: UPI आईडी या QR कोड पर पेमेंट करके, एडमिन को अनुरोध भेजें। जांच के बाद आपकी रिक्वेस्ट स्वीकार कर ली जाएगी, और 2 मिनट में आपके वॉलेट में कॉइन जुड़ जाएंगे। नोटः यदि आप गलत रिक्वेस्ट डालते हैं, तो आपको पेनल्टी का सामना करना पड़ेगा, इसलिए कृपया गलत अनुरोध न करें |
                    </div>
                    <div className='added-amount-box'>
                        <h3 className='added-amount'>
                            Amount to be added ₹250
                        </h3>
                        <button className='editBtn theme-btn'> Edit</button>
                    </div>
                    <div className='upi-img'>
                        <img src="/upi-img.png" alt="" />
                    </div>
                    <div className='select-method'>
                        <label htmlFor="">Manual Payment</label>
                        <select name="" className='form-select' id="">
                            <option defaultValue>Payment Method</option>
                            <option value="">UPI</option>
                            <option value="">ACCOUNT</option>
                            <option value="">QR CODE</option>
                        </select>
                    </div>
                    <div className="upi-container">
                        <p className="upi-label">Pay to UPI:</p>
                        <div className="upi-row">
                            <span className="upi-id">{upiId}</span>
                            <button className="copy-btn-icon" >
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.7188 28H9.84375C8.03425 28 6.5625 26.5282 6.5625 24.7188V9.84375C6.5625 8.03425 8.03425 6.5625 9.84375 6.5625H24.7188C26.5282 6.5625 28 8.03425 28 9.84375V24.7188C28 26.5282 26.5282 28 24.7188 28ZM9.84375 8.75C9.24066 8.75 8.75 9.24066 8.75 9.84375V24.7188C8.75 25.3218 9.24066 25.8125 9.84375 25.8125H24.7188C25.3218 25.8125 25.8125 25.3218 25.8125 24.7188V9.84375C25.8125 9.24066 25.3218 8.75 24.7188 8.75H9.84375ZM4.375 19.25H3.28125C2.67816 19.25 2.1875 18.7593 2.1875 18.1562V3.28125C2.1875 2.67816 2.67816 2.1875 3.28125 2.1875H18.1562C18.7593 2.1875 19.25 2.67816 19.25 3.28125V4.32031H21.4375V3.28125C21.4375 1.47175 19.9657 0 18.1562 0H3.28125C1.47175 0 0 1.47175 0 3.28125V18.1562C0 19.9657 1.47175 21.4375 3.28125 21.4375H4.375V19.25Z" fill="#000" />
                                </svg>
                            </button>
                        </div>
                        <button onClick={() =>setIsOpen(true)} className="editBtn theme-btn w-100" >Upload </button>
                    </div>
                    <div className="upi-container mt-0">
                        <p className="upi-label">Account Number</p>
                        <div className="upi-row">
                            <span className="upi-id">
                                45883597842
                            </span>
                            <button className="copy-btn-icon" >
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.7188 28H9.84375C8.03425 28 6.5625 26.5282 6.5625 24.7188V9.84375C6.5625 8.03425 8.03425 6.5625 9.84375 6.5625H24.7188C26.5282 6.5625 28 8.03425 28 9.84375V24.7188C28 26.5282 26.5282 28 24.7188 28ZM9.84375 8.75C9.24066 8.75 8.75 9.24066 8.75 9.84375V24.7188C8.75 25.3218 9.24066 25.8125 9.84375 25.8125H24.7188C25.3218 25.8125 25.8125 25.3218 25.8125 24.7188V9.84375C25.8125 9.24066 25.3218 8.75 24.7188 8.75H9.84375ZM4.375 19.25H3.28125C2.67816 19.25 2.1875 18.7593 2.1875 18.1562V3.28125C2.1875 2.67816 2.67816 2.1875 3.28125 2.1875H18.1562C18.7593 2.1875 19.25 2.67816 19.25 3.28125V4.32031H21.4375V3.28125C21.4375 1.47175 19.9657 0 18.1562 0H3.28125C1.47175 0 0 1.47175 0 3.28125V18.1562C0 19.9657 1.47175 21.4375 3.28125 21.4375H4.375V19.25Z" fill="#000" />
                                </svg>
                            </button>
                        </div>
                        <p className="upi-label">Beneficiary Name
                        </p>
                        <div className="upi-row">
                            <span className="upi-id">Dinesh Yadav</span>
                            <button className="copy-btn-icon" >
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.7188 28H9.84375C8.03425 28 6.5625 26.5282 6.5625 24.7188V9.84375C6.5625 8.03425 8.03425 6.5625 9.84375 6.5625H24.7188C26.5282 6.5625 28 8.03425 28 9.84375V24.7188C28 26.5282 26.5282 28 24.7188 28ZM9.84375 8.75C9.24066 8.75 8.75 9.24066 8.75 9.84375V24.7188C8.75 25.3218 9.24066 25.8125 9.84375 25.8125H24.7188C25.3218 25.8125 25.8125 25.3218 25.8125 24.7188V9.84375C25.8125 9.24066 25.3218 8.75 24.7188 8.75H9.84375ZM4.375 19.25H3.28125C2.67816 19.25 2.1875 18.7593 2.1875 18.1562V3.28125C2.1875 2.67816 2.67816 2.1875 3.28125 2.1875H18.1562C18.7593 2.1875 19.25 2.67816 19.25 3.28125V4.32031H21.4375V3.28125C21.4375 1.47175 19.9657 0 18.1562 0H3.28125C1.47175 0 0 1.47175 0 3.28125V18.1562C0 19.9657 1.47175 21.4375 3.28125 21.4375H4.375V19.25Z" fill="#000" />
                                </svg>
                            </button>
                        </div>
                        <p className="upi-label">IFSC Code</p>
                        <div className="upi-row">
                            <span className="upi-id">KKFCCGG60</span>
                            <button className="copy-btn-icon" >
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.7188 28H9.84375C8.03425 28 6.5625 26.5282 6.5625 24.7188V9.84375C6.5625 8.03425 8.03425 6.5625 9.84375 6.5625H24.7188C26.5282 6.5625 28 8.03425 28 9.84375V24.7188C28 26.5282 26.5282 28 24.7188 28ZM9.84375 8.75C9.24066 8.75 8.75 9.24066 8.75 9.84375V24.7188C8.75 25.3218 9.24066 25.8125 9.84375 25.8125H24.7188C25.3218 25.8125 25.8125 25.3218 25.8125 24.7188V9.84375C25.8125 9.24066 25.3218 8.75 24.7188 8.75H9.84375ZM4.375 19.25H3.28125C2.67816 19.25 2.1875 18.7593 2.1875 18.1562V3.28125C2.1875 2.67816 2.67816 2.1875 3.28125 2.1875H18.1562C18.7593 2.1875 19.25 2.67816 19.25 3.28125V4.32031H21.4375V3.28125C21.4375 1.47175 19.9657 0 18.1562 0H3.28125C1.47175 0 0 1.47175 0 3.28125V18.1562C0 19.9657 1.47175 21.4375 3.28125 21.4375H4.375V19.25Z" fill="#000" />
                                </svg>
                            </button>
                        </div>
                        <button className="editBtn theme-btn w-100" >Upload</button>
                    </div>
                    <div className="Qr-container">
                        <h5 className='qr-heading'>Pay With QR Code </h5>
                        <div className='Qr-code'>
                            <img src="/qr-img.png" alt="" />
                        </div>
                        <button onClick={() =>setIsOpen(true)} className="editBtn theme-btn w-100" >Upload</button>
                    </div>
                </div>

                <Modal
                    isOpen={isOpen}
                    onRequestClose={() => setIsOpen(true)}
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

                    <h4 className="font-26">Payment Details</h4>
                    <form action="">
                        <div className='form-group'>
                            <input type="text" placeholder='UTR Number' className='form-control' />
                        </div>
                        <div className='form-group'>
                                <div className="upload-file-section mb-0">
                                    <label className="upload-file-button">
                                        <div>
                                            <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.5037 23.6414H18.6381V16.704H20.907C21.4824 16.704 21.8224 16.0501 21.4824 15.5793L17.0689 9.47226C16.7877 9.07994 16.2058 9.07994 15.9246 9.47226L11.511 15.5793C11.171 16.0501 11.5045 16.704 12.0864 16.704H14.3553V23.6414H6.66592C3.23314 23.4518 0.5 20.2414 0.5 16.7628C0.5 14.3631 1.80119 12.2708 3.73008 11.1396C3.55353 10.6623 3.46199 10.1523 3.46199 9.61611C3.46199 7.16412 5.4432 5.18292 7.89518 5.18292C8.42481 5.18292 8.93482 5.27446 9.41214 5.45101C10.831 2.44324 13.8911 0.357422 17.4481 0.357422C22.0513 0.36396 25.8437 3.88828 26.2752 8.38031C29.8126 8.9884 32.5 12.2642 32.5 15.9716C32.5 19.934 29.4138 23.3668 25.5037 23.6414Z" fill="black" />
                                            </svg>

                                        </div>
                                        <div> Upload File   </div>

                                        <input
                                            type="file"
                                            accept="image/*"  // Only accept image files
                                            onChange={handleFileChange}
                                            style={{ display: 'none' }}
                                        />
                                    </label>
                                    {previewImage && (
                                        <div className="image-preview">
                                            <img
                                                src={previewImage}
                                                alt="Preview"
                                                className="preview-image"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div> 
                        <button type='submit' className='btn theme-btn save-changes'> Submit </button>
                    </form>


                </Modal>

            </Layout>
        </>
    )
}

export default ManualPayment