import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Business from './pages/Business'
import Network from './pages/Network'
import Towns from './pages/Towns'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="business" element={<Business />} />
        <Route path="network" element={<Network />} />
        <Route path="towns" element={<Towns />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
