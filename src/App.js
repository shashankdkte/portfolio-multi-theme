import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Testimonials';

import Contact from './sections/contact/Contact';

import FloatingNav from './sections/floating-nav/FloatingNav';
import FAQSection from './sections/faqs/FAQSection';
import FooterSection from './sections/footer/FooterSection';
import Theme from './theme/Theme';
import { useThemeContext } from './context/themeContext';
import { useEffect, useRef, useState } from 'react';

const App = () => {
  const { themeState } = useThemeContext();
  
  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPostion, setSiteYPosition] = useState(0)

    const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  }

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  }


  // check if floating nav should be shown or hidden
  const floatingNavToggleHandler = () => {
    // check if we scrolled up or down at least 20px
    if(siteYPostion < (mainRef?.current?.getBoundingClientRect().y - 20) || siteYPostion > (mainRef?.current?.getBoundingClientRect().y + 20)) {
        console.log(mainRef?.current?.getBoundingClientRect().y)
        showFloatingNavHandler();
      } else {
      console.log("false")
      hideFloatingNavHandler();
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  }

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);
      console.log(checkYPosition)
    // cleanup function
    return () => clearInterval(checkYPosition);
  }, [siteYPostion])

  
  return (
    <main className={`${themeState.primary} ${themeState.background}`} ref={mainRef}>
        <Navbar/>
        <Header/>
        <About/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
       <FAQSection />
        <Contact/>
        <FooterSection />
      {/* <FloatingNav /> */}
      <Theme />
      {showFloatingNav && <FloatingNav/>}
    </main>
  )
}

export default App