import React from 'react'
import { destinationitalywyhus } from './DestinationItalyArray'
export default function DestinationWhyUsSection() {
  return (
    <section>
    <div className="section-3">
    <h1>Expert guidance to help you <br /> plan your trip  </h1>
      <div className="whyus-cards">
        {
          destinationitalywyhus.map((item) =>  <WhyUsCards key={item.id} {...item}/>)
        }
      </div>
    </div>
  </section>
  )
}


const WhyUsCards = ({ frameIcon, title,text }) => {
    return(
        <div className="whyus-card">
            <div className="icon">
                <img src={frameIcon} alt="frameIcon" />
            </div>
            <div className="whyus-text">
                <p className='title'>{title}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

