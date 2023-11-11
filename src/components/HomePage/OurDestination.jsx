import React from 'react'
import arrowIcon from '..//..//assets/Chevron_Right.svg'
import './HomePage.css'
export default function OurDestination() {
  return (
       <section>
            <div id='our-destination'>
                <div>
                    <h1>Looking to go elsewhere?</h1>
                    <div className="destination">
                        <p>Our destinations</p>
                        <img src={arrowIcon} alt="arrowIcon" />
                    </div>
                </div>
            </div>
       </section>
  )
}
