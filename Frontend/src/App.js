import { React } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Signin';
import Signup from './components/Signup';
import Service from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Ipcentry from './components/Ipcentry'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/entry" element={<Ipcentry />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
