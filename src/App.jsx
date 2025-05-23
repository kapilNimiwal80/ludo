
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import Dashboard from './page/Dashboard'
import GameList from './page/GameList'
import GameDetails from './page/GameDetails'
import MyProfile from './page/MyProfile'
import ReferHistory from './page/ReferHistory'
import ReferEarn from './page/ReferEarn'
import WalletHistorys from './page/WalletHistorys'
import Withdrawal from './page/Withdrawal'
import WithdrawalUi from './page/WithdrawalUi'
import Kyc from './page/Kyc'
import AddAmount from './page/AddAmount'
import ManualPayment from './page/ManualPayment'
import Referal from './page/Referal'
import PrivacyPolicy from './page/PrivacyPolicy'
// import WalletHistory from './page/WalletHistory'
import WithdrawalHistory from './page/WithdrawalHistory'
import MyWallet from './page/MyWallet'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './responsive.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/game-list" element={<GameList />} />
      <Route path="/game-detail" element={<GameDetails />} />
      <Route path="/my-profile" element={<MyProfile />} />
      <Route path="/my-wallet" element={<MyWallet />} />
      <Route path="/wallet-history" element={<WalletHistorys/>} />
      <Route path="/refer-history" element={<ReferHistory />} />
      <Route path="/refer-earn" element={<ReferEarn />} />
      <Route path="/withdrawal" element={<Withdrawal/>} />
      <Route path="/withdrawal-ui" element={<WithdrawalUi/>} />
      <Route path="/kyc" element={<Kyc/>} />
      <Route path="/add-amount" element={<AddAmount/>} />
      <Route path="/manual-payment" element={<ManualPayment/>} />
      <Route path="/referal" element={<Referal/>} />
      <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
      <Route path="/withdrawal-history" element={<WithdrawalHistory />} />
    </Routes>
  )
}
export default App;