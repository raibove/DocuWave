import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import landingBg from './assets/landing-bg.svg';
import './App.css'
import logo from './assets/logo-full.png';

function App() {
  return (
    <div className='landing'>
    <div className='header'>
      <img src={logo} className='logo' alt="DocuWave"/>
    </div>
    <div className='landing-content'>
      <p className='landing-tag'>Create. Secure. Share</p>
      <p className='landing-tagline'>With Docuwave create or upload new documents, share it with users all securly</p>
      <button>Get Started</button>
    </div>
    <div className='bg-con'>
      <img src={landingBg} alt='bg' className='bg-img'/>
      </div>
    </div>
  )
}

export default App
