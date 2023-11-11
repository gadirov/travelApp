import React from 'react'
import arrowLeftIcon from '..//..//assets/destinationitaly/arrowleft.svg'
import arrowRightIcon from '..//..//assets/destinationitaly/arrowright.svg'
import b from '..//..//assets/destinationitaly/bg.jpeg'
export default function DestinationMapSection() {
  return (
    <section id='section-5' className='bg-map-image'>
        <div className="map-section">
            <div className="topmap-section">
                <h1>Tops things to do</h1>
                <div className='arrow'>
                    <div>
                        <img src={arrowLeftIcon} alt="arrowLeftIcon" />
                    </div>
                    <div>
                        <img src={arrowRightIcon} alt="arrowRightIcon" />
                    </div>
                </div>
            </div>
            <div className="bottommap-section">
                <div>
                    <img src={b} alt="" />
                    <p>Have the drive of your life on the cliff roads of the AAmalfi Coast</p>
                </div>
            </div>
        </div>
    </section>
  )
}
