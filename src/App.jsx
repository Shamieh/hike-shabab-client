import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Tips from './components/Tips';
import AboutUs from './components/AboutUs';
import HikeDetails from './components/HikeDetails';
import AdminDashboard from './components/AdminDashboard';
import MyHikes from './components/MyHikes';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('user');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <>
    <Router>
      <Navigation user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/upcoming" element={<MyHikes user={user} />} />
        <Route path="/hike/:id" element={user ? <HikeDetails user={user} /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onLogin={handleLogin} />} />
        <Route path="/admin" element={user?.role === 'admin' ? <AdminDashboard /> : <Navigate to="/home" />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
