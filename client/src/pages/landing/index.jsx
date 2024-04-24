import landingBg from '../../assets/landing-bg.svg';
import { useAuth } from "@pangeacyber/react-auth";
import logo from '../../assets/logo-full.png';
import { useNavigate } from 'react-router-dom';

export const Landing = () => {
  const { authenticated, login, logout } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    console.log(authenticated)
    if (authenticated) {
      navigate('/dashboard')
    } else {
      login();
    }
  }

  return (
    <div className='landing'>
      <div className='header'>
        <img src={logo} className='logo' alt="DocuWave" />
      </div>
      <div className='landing-content'>
        <p className='landing-tag'>Create. Secure. Share</p>
        <p className='landing-tagline'>With DocuWave create or upload new documents, share it with users all securly</p>
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
      <div className='bg-con'>
        <img src={landingBg} alt='bg' className='bg-img' />
      </div>
    </div>
  )
}