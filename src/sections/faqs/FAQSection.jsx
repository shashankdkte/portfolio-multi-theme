import faqs from "./data";
import Faq from "../../components/faq/Faq";
import './faqs.css'

const FAQSection = () => {
  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some questions I usually get to Click to toggle the answer
        and if you still have some more questions , shoot me a message from the 
        contact question
      </p>
      <div className="container faqs__container">
        {faqs.map(faq => (
         <Faq key={faq.id} faq={faq}/>
        ))}
      </div>
    </section>
  )
}

export default FAQSection