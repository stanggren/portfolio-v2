import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Web from './pages/Web';
import Audio from './pages/Audio';
import CV from './pages/CV';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {!isHome && <Header />}
      <main className="flex-1">
        <div className="max-w-[1000px] mx-auto px-16 py-32 md:px-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/web" element={<Web />} />
            <Route path="/audio" element={<Audio />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
