import './App.css'
import FixedHeader from './components/FixedHeader/FixedHeader'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { useEffect, useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import Contact from './components/RouterComponents/Contact/Contact'
import JoinAsAtithi from './components/RouterComponents/JoinAsAtithi/JoinAsAtithi'
import { Rotate } from 'hamburger-react'
import Gallery from './components/Gallery/Gallery'
import GototopButton from './components/GototopButton/GototopButton'
import AboutForRoute from './components/RouterComponents/Others/AboutForRoute'
import BecomeMember from './components/BecomeMember/BecomeMember'


function App() {
const location = useLocation()
const navigate = useNavigate()

  const ScrollToTop=()=>{
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
  }
  const [showLogin,setShowLogin] = useState(false)
  const[showMemberRegGuide, setShowMemberRegGuide] = useState(false)
  

  const logoGotoTopOrHome = () => {
    if(location.pathname === "/"){
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }else{
        navigate("/")
      }
    }

    const handleAboutClick = () => {
      if (location.pathname !== '/') {
        navigate("/about")  
      }else{
        console.log(
          "path problem bro"
        )
      }
    };

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
     {showMemberRegGuide? <BecomeMember setShowMemberRegGuide={setShowMemberRegGuide}/> : <></>}
     <div>
  
      <Header setShowLogin={setShowLogin} setShowMemberRegGuide={setShowMemberRegGuide} logoGotoTopOrHome={logoGotoTopOrHome} handleAboutClick={handleAboutClick}/>
      <FixedHeader setShowLogin={setShowLogin} setShowMemberRegGuide={setShowMemberRegGuide} logoGotoTopOrHome={logoGotoTopOrHome} handleAboutClick={handleAboutClick}/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/atithi' element={<JoinAsAtithi />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path="/about" element={<AboutForRoute />}/>
        </Routes>
      <Footer />
     </div>
     <GototopButton />
     <ScrollToTop />
    </>
  )
}

export default App
