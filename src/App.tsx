import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Market from './pages/Market'
import NotFoundPage from './pages/NotFound'
import MarketToken from './pages/MarketToken'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/market/:token" element={<MarketToken />} />
        <Route path="/market" element={<Market />} />
        <Route path="/" element={<Navigate replace to="/market" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
