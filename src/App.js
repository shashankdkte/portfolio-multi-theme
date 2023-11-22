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

const App = () => {
  return (
    <main>
        <Navbar/>
        <Header/>
        <About/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
       <FAQSection />
        <Contact/>
        <FooterSection />
        <FloatingNav/>
    </main>
  )
}

export default App