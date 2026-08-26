import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar({ login, setLogin }) {
  const navigate = useNavigate()
  return (
    <header className="site-header">
      <button className="brand" onClick={() => navigate('/')}>Care<span>Link</span></button>
      <nav className="nav-links">
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/adddoctor')}>Doctors</button>
        <button onClick={() => navigate('/weather')}>Weather</button>
        <button className="nav-primary" onClick={() => navigate('/adddoctor')}>Add doctor</button>
        <button className="nav-login" onClick={() => setLogin(!login)}>{login ? 'Logout' : 'Login'}</button>
      </nav>
    </header>
  )
}

export default Navbar
