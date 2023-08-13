import './App.css';
import About from './Components/About'
import { useHref } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div>
  
    {/* Use BrowserRouter and Routes */}
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
   

  </div>
  );
}

export default App;
