import './App.css';
import './responsive.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import NoPage from './pages/NoPage';
import Contact from './pages/Contact';
import Faq from './pages/Faq'
import { Home } from './components';
import Service from './pages/Service';
import Career from './pages/Career';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='About' element={<About />} />
          <Route path='Service' element={<Service />} />
          <Route path='Faq' element={<Faq />} />
          <Route path='Career' element={<Career />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;