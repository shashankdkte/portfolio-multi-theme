import faqs from "./data";
import Faq from "../../components/faq/Faq";
import AOS from 'aos'
import 'aos/dist/aos.css'
import './faqs.css'
import { useEffect } from "react";

const FAQSection = () => {
   useEffect(() => {
    AOS.init({duration: 2000})
  })

  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some questions I usually get to Click to toggle the answer
        and if you still have some more questions , shoot me a message from the 
        contact question
      </p>
      <div className="container faqs__container" data-aos="fade-in">
        {faqs.map(faq => (
         <Faq key={faq.id} faq={faq}/>
        ))}
      </div>
    </section>
  )
}

export default FAQSection