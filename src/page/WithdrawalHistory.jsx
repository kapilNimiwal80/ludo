import React from 'react'
import Layout from '../layouts'

const WithdrawalHistory = () => {
    return (
        <>
            <Layout>
                <div className='profile-mainBox'>
                    <h1 className='page-title'>Withdrawal History </h1>
                    <div className="profile-details-card">
                        <div className="info-row">
                            <span className="card-label">Withdraw History   </span>
                            <span className="card-value">(+)
                            ₹ 1000.00</span>
                        </div>
                        <div className="info-row">
                            <span className="card-label">Order ID  </span>
                            <span className="card-value">0008</span>
                        </div>
                        <div className="info-row">
                            <span className="card-label">Status</span>
                            <span className="card-value">Rejected</span>
                        </div>
                        <div className="info-row">
                            <span className="card-label">Payment</span>
                            <span className="card-value">UPI</span>
                        </div>
                        <div className="info-row">
                            <span className="card-label">Date</span>
                            <span className="card-value">April 10, 04:59 PM</span>
                        </div>
                    </div>
                    <div className="profile-details-card">
                        <div className="info-row">
                            <span className="card-label">Withdraw History   </span>
                            <span className="card-value">(+)
                            ₹ 1000.00</span>
                        </div>
                        <div className="info-row">
                            <span className="card-label">Order ID  </span>
                            <span className="card-value">0008</span>
                        </div>
                        <div className="info-row">
                            <span className="card-label">Status</span>
                            <span className="card-value">Rejected</span>
                        </div>
                        <div className="info-row">
                            <span className="card-label">Payment</span>
                            <span className="card-value">UPI</span>
                        </div>
                        <div className="info-row">
                            <span className="card-label">Date</span>
                            <span className="card-value">April 10, 04:59 PM</span>
                        </div>
                    </div>
                </div>
          
            </Layout>
        </>
    )
}

export default WithdrawalHistory