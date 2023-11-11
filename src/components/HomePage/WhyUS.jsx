import React from 'react'
import { datawyhus } from './Arrays/WhyUSArray'


export default function WhyUs() {
  return (
        <section>
          <div className="section-3">
          <h1>Why US?</h1>
            <div className="whyus-cards">
              {
                datawyhus.map((item) =>  <WhyUsCards key={item.id} {...item}/>)
              }
            </div>
          </div>
        </section>
  )
}


const WhyUsCards = ({ frameIcon, title }) => {
    return(
        <div className="whyus-card">
            <div className="icon">
                <img src={frameIcon} alt="frameIcon" />
            </div>
            <p>{title}</p>
        </div>
    )
}
