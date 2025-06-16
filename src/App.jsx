import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'


function App() {

  return (
    <>
    


      <Navigation/>

      <Home/>
      <Footer/>
    </>
  )
}

export default App
