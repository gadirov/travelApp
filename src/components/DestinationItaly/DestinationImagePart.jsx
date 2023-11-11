import React from 'react'
import frame2 from "..//..//assets/Frame2.svg"
import star from '..//..//assets/destinationitaly/Star.svg'
import starlight from '..//..//assets/destinationitaly/Starlight.svg'
export default function DestinationImagePart() {
  return (
        <section id='section-5' className='bg-italy'>
        <div className="section-5">
            <div className="topSection-5">
                <p>“Tiago put together an epic itinerary for me and my friends. He showed us some hidden hiking trails and 
                    amazing local food spots. He even met us for a coffee to make sure we had everything we needed.
                </p>
            </div>
            <div className="bottomSection5">
                <div className="bottomSection5-icon">
                    <img src={frame2} alt="frame2" />
                </div>
                <div className="bottomSection5-text">
                    <p>Vivian Lim</p>
                    <div>
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={starlight} alt="starlight" />
                        <p>|</p>
                        <span>18 June 2024</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
