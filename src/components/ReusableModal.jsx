import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ReusableModal = ({ isOpen, onClose, onSubmit, type }) => {
    const [previewImage, setPreviewImage] = useState(null);
    const [selectedReason, setSelectedReason] = useState('');
    const [isChecked, setIsChecked] = useState(false);

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

    const renderContent = () => {
        switch (type) {
            case 'won':
                return (
                    <>
                        <h4 className="font-26">Upload Result</h4>
                        <div className="upload-file-section">
                            <label className="upload-file-button">
                                <div>
                                    <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.5037 23.6414H18.6381V16.704H20.907C21.4824 16.704 21.8224 16.0501 21.4824 15.5793L17.0689 9.47226C16.7877 9.07994 16.2058 9.07994 15.9246 9.47226L11.511 15.5793C11.171 16.0501 11.5045 16.704 12.0864 16.704H14.3553V23.6414H6.66592C3.23314 23.4518 0.5 20.2414 0.5 16.7628C0.5 14.3631 1.80119 12.2708 3.73008 11.1396C3.55353 10.6623 3.46199 10.1523 3.46199 9.61611C3.46199 7.16412 5.4432 5.18292 7.89518 5.18292C8.42481 5.18292 8.93482 5.27446 9.41214 5.45101C10.831 2.44324 13.8911 0.357422 17.4481 0.357422C22.0513 0.36396 25.8437 3.88828 26.2752 8.38031C29.8126 8.9884 32.5 12.2642 32.5 15.9716C32.5 19.934 29.4138 23.3668 25.5037 23.6414Z" fill="black" />
                                    </svg>

                                </div>
                                <div> Upload File</div>

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

                        <button type='button' className='yellow-btn btn-lg w-100' > Post Submit </button>
                    </>
                );
            case 'lost':
                return (
                    <>
                        <div className="max-300">
                            <p className='info-text text-center'>
                                <div>Are you sure you Lost this game?</div>
                                <div>क्या आप निश्चित हैं कि आप यह गेम हार गए हैं?</div>
                            </p>
                        </div>

                        <div className="checkbox-section">
                            <input type="checkbox" class="ui-checkbox"></input>
                            <span>Yes, I Confirm*</span>
                        </div>


                        <button type='button' className='yellow-btn delete-btn mb-3 btn-lg w-100' > Yes, I lost </button>
                        <button type='button' className='yellow-btn btn-lg w-100' > No </button>

                    </>
                );
            case 'cancel':
                const reasons = [
                    "No Room Code",
                    "Not joined",
                    "Not Playing",
                    "Don't Want to Play",
                    "Opponent Abusing",
                    "Game not Started",
                    "Others"
                ];
                return (
                    <>
                        <div className="tetx-center">
                            <h4 className='modal-heading'> We would like to know more
                            </h4>
                            <p className='info-text text-center'>
                                Select Reason for cancelling
                            </p>
                        </div>
                        <div className="reason-section my-form">
                            <div className="reason-box">
                                <input id="radio-2" type="radio" name="option" />
                                <label htmlFor="radio-2">No Room Code</label>
                            </div>
                            <div className="reason-box">
                                <input id="radio-3" type="radio" name="option" />
                                <label htmlFor="radio-3">Not joined</label>
                            </div>
                            <div className="reason-box">
                                <input id="radio-4" type="radio" name="option" />
                                <label htmlFor="radio-4">Not Playing</label>
                            </div>
                            <div className="reason-box">
                                <input id="radio-5" type="radio" name="option" />
                                <label htmlFor="radio-5">Dont Want to Play</label>
                            </div>
                            <div className="reason-box">
                                <input id="radio-6" type="radio" name="option" />
                                <label htmlFor="radio-6">Opponent Abusing</label>
                            </div>
                            <div className="reason-box">
                                <input id="radio-7" type="radio" name="option" />
                                <label htmlFor="radio-7">Game not Started</label>
                            </div>
                            <div className="reason-box">
                                <input id="radio-8" type="radio" name="option" />
                                <label htmlFor="radio-8">Others</label>
                            </div>

                        </div>
                        <button type='button' className='yellow-btn btn-lg w-100' > Submit </button>
                    </>
                );
            default:
                return <p>No content</p>;
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Reusable Modal"
            style={{
                content: {
                    maxWidth: '400px',
                    minWidth: '388px',
                    margin: 'auto',
                    padding: '20px',
                    borderRadius: '10px',
                    inset: '50% auto auto 50%',
                    transform: 'translate(-50%, -50%)',
                },
            }}
        >
            <button onClick={onClose} className='btn-close modal-close-btn' >X</button>
            <div>
                {renderContent()}
            </div>
        </Modal>
    );
};

export default ReusableModal;
