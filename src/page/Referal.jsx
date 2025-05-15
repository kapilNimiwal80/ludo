import React from 'react'
import Layout from '../layouts'

function Referal() {
  return (
    <Layout>
       <div className="alert-box Commission-box " >
       Commission 3% Referral 2% for all game
        </div>
      <div className='wallet-mainBox referalBlock'>
        
        <div className='card-details'>
            <h4 className="Card-Details-heading">Redeem your refer balance </h4>
            <p className="kyc-text"> TDS (0%) will be deducted after annual referral earnings of 15000</p>
            <div className="form-group">
              <input placeholder="Amount" className="form-control" type="text"/>
              <p className='error'> Enter Amount (Min: 100 , Max:10000) </p>
              </div>
            <button type="button" className="btn theme-btn mt-4"> Redeem </button>
        </div>
       
      </div>

    </Layout>
  )
}

export default Referal