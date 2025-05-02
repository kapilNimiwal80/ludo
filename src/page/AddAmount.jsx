import React from 'react'
import Layout from '../layouts'


const AddAmount = () => {
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
                        आप दो तरीकों से कॉइन जोड़ सकते हैं: 1. UPI बटनः एक बॉक्स आएगा, उस पर क्लिक करें और लोडर को चलने दें। यह आपको आपके पेमेंट प्लेटफॉर्म पर ले जाएगा। 2. मैनुअल पेमेंट: UPI आईडी या QR कोड पर पेमेंट करके, एडमिन को अनुरोध भेजें। जांच के बाद आपकी रिक्वेस्ट स्वीकार कर ली जाएगी, और 2 मिनट में आपके वॉलेट में कॉइन जुड़ जाएंगे। नोटः यदि आप गलत रिक्वेस्ट डालते हैं, तो आपको पेनल्टी का सामना करना पड़ेगा, इसलिए कृपया गलत अनुरोध न करें |                     </div>
                    <div className="add-amount-box">
                        <form action="">
                            <div className='form-group'>
                                <input type="number" placeholder="Enter Amount" className="input-field form-control" />
                                <div className='minmax-amount'>
                                    Min: ₹50, Max: ₹100000
                                </div>
                            </div>
                            <div className='select-amount'>
                                <div className='select-amount-box'>
                                    <div className='select-amount-item'>
                                        <input type="radio" name='select-amount' id='50rs' />
                                        <label htmlFor="50rs"> ₹50</label>
                                    </div>
                                    <div className='select-amount-item'>
                                        <input type="radio" name='select-amount' id='100rs' />
                                        <label htmlFor="100rs"> ₹100</label>
                                    </div>
                                    <div className='select-amount-item'>
                                        <input type="radio" name='select-amount' id='2000rs' />
                                        <label htmlFor="2000rs"> ₹2000</label>
                                    </div>
                                </div>
                            </div>
                            <button className="submit-button theme-btn">Next</button>
                        </form>
                    </div>
                </div>
            </Layout>

        </>
    )
}

export default AddAmount