import React from 'react'
import Card from "../card/Card";

const Testimonial = ({testimonial}) => {
  return (
    <Card className="light">
      <p>{testimonial.quote}</p>
      <div className="testimonial__client">
        <div className="testimonial__client-avatar">
          <img src={testimonial.avatar} alt="Avatar" />
        </div>
        <div className="testinmonial__client-details">
          <h6>{testimonial.name}</h6>
          <small>{Testimonial.profession}</small>
        </div>
      </div>
    </Card>
  )

}

export default Testimonial