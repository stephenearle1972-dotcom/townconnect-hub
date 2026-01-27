import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Business from './pages/Business'
import Network from './pages/Network'
import Towns from './pages/Towns'
import Contact from './pages/Contact'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Disclaimer from './pages/Disclaimer'
import CookiePolicy from './pages/CookiePolicy'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="business" element={<Business />} />
        <Route path="network" element={<Network />} />
        <Route path="towns" element={<Towns />} />
        <Route path="contact" element={<Contact />} />
        <Route path="terms" element={<TermsOfService />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="cookies" element={<CookiePolicy />} />
      </Route>
    </Routes>
  )
}

export default App
