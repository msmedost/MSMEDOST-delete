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
import RegistrationForm from './components/BecomeMember/RegistrationForm'
import FranchiseRegistration from './components/RouterComponents/FranchiseRegistration/FranchiseRegistration'
import ErrorPage from './components/RouterComponents/ErrorPage/ErrorPage'
// import MobileSidebar from './components/MobileSidebar/MobileSidebar'


function App() {
const location = useLocation()
const navigate = useNavigate()
// const [isOpen, setIsOpen] = useState(false)

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
  const gotoFaqs = () => {
    if(location.pathname !== "/"){
        navigate("/faqs")
      }
    }

    const handleAboutClick = () => {
      if (location.pathname !== '/') {
        navigate("/about")  
      }
    };

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
     {showMemberRegGuide? <BecomeMember setShowMemberRegGuide={setShowMemberRegGuide}/> : <></>}
     <div>
      <Header setShowLogin={setShowLogin} setShowMemberRegGuide={setShowMemberRegGuide} logoGotoTopOrHome={logoGotoTopOrHome} handleAboutClick={handleAboutClick} gotoFaqs={gotoFaqs} />
      <FixedHeader setShowLogin={setShowLogin} setShowMemberRegGuide={setShowMemberRegGuide} logoGotoTopOrHome={logoGotoTopOrHome} handleAboutClick={handleAboutClick}/>
      {/* <MobileSidebar isOpen={isOpen}  setIsOpen={setIsOpen}/> */}
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/atithi' element={<JoinAsAtithi />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path="/about" element={<AboutForRoute />}/>
        <Route path='/register' element={<RegistrationForm />}/>
        <Route path='/franchise' element={<FranchiseRegistration />}/>
        <Route path='*' element={<ErrorPage logoGotoTopOrHome={logoGotoTopOrHome}/>}/>
        </Routes>
      <Footer handleAboutClick={handleAboutClick} logoGotoTopOrHome={logoGotoTopOrHome}/>
     </div>
     <GototopButton />
     <ScrollToTop />
    </>
  )
}

export default App
