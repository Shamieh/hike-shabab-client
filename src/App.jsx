import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import AboutUs from './components/AboutUs'
import Tips from './components/Tips'


function App() {

  return (
    <>
    


      <Navigation/>

      <Tips/>
      <Footer/>
    </>
  )
}

export default App
