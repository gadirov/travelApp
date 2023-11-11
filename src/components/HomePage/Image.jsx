import React from 'react'
import frame2 from "..//..//assets/Frame2.svg"
import './HomePage.css'
export default function Image() {
  return (
    <section id='section-5'>
        <div className="section-5">
            <div className="topSection-5">
                <p>“Tiago put together an epic itinerary for me and my friends. He showed us some hidden hiking trails and 
                    amazing local food spots. He even met us for a coffee to make sure we had everything we needed.
                </p>
                <p className='p'>Thanks Tiago!”</p>
                <p>Charlie, rappelling down a 370-foot waterfall</p>
                <p>The Azores</p>
            </div>
            <div className="bottomSection5">
                <div className="bottomSection5-icon">
                    <img src={frame2} alt="frame2" />
                </div>
                <div className="bottomSection5-text">
                    <p>Trip crafted by</p>
                    <div>
                        <p>Tiago</p>
                        <span>Local expert in Portugal</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
