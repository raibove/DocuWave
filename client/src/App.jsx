import { useState } from 'react'
import './App.css'
import { AuthProvider } from "@pangeacyber/react-auth";
import { useNavigate } from 'react-router-dom';

import { Routes, Route } from "react-router-dom"
import { Landing } from './pages/landing';

const LOGIN_URL = import.meta.env.VITE_LOGIN_URL || "";
const CLIENT_TOKEN = import.meta.env.VITE_CLIENT_TOKEN || "";
const PANGEA_DOMAIN = import.meta.env.VITE_PANGEA_DOMAIN || "";


function App() {

  const navigate = useNavigate();
  const authConfig = {
    clientToken: CLIENT_TOKEN,
    domain: PANGEA_DOMAIN,
  };

  const handleLogin = (appData) => {
    navigate(appData.returnPath);
  };

  if (!authConfig.clientToken || !authConfig.domain) {
    return (
      <h2>
        Please configure your environment variables.
      </h2>
    );
  }
  return (
    <AuthProvider
      config={{
        domain: PANGEA_DOMAIN,
        clientToken: CLIENT_TOKEN,
        useJwt: true
      }}
      cookieOptions={{
        useCookie: true,
        cookieName: "docuwave-pangea"
      }}
      onLogin={handleLogin}
      loginUrl={LOGIN_URL}
    // useStrictStateCheck={false}
    >
      <Routes>
        <Route path='/' element={<Landing />}></Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
