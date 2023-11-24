import React, { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"
import Card from '../card/Card'

const Faq = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <Card className="faq" onClick={()=>setShowAnswer(prev => !prev)}> 
      <div>
        <h5 className="faq__question">
          {faq.question}</h5>
        <button className='faq__icon'>
           {showAnswer ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>
      </div>
       {showAnswer && <p className="faq__answer">{faq.answer}</p>}
    </Card>
  )
}

export default Faq