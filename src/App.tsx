import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import ProductDesign from './pages/ProductDesign'
import PatientManagementCaseStudy from './pages/PatientManagementCaseStudy'
import Contact from './pages/Contact'
import './portfolio.scss'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product-design" element={<ProductDesign />} />
            <Route path="/patient-management-case-study" element={<PatientManagementCaseStudy />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
