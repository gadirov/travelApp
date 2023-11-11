import React from 'react'
import searchicon from '../../assets/searchicon.svg'
import './HomePage.css'
export default function FirstSection () {
  return (
    <section>
        <div className="section_1">
            <div className="section-text">
                <h1>We create trips you love</h1>
                <p>Trips you couldn't plan, even if you wanted to.</p>
            </div>
            <div className="search-bar">
                <input type="search" placeholder="Where do you want to go?"/>
                <img src={searchicon} alt="" />
            </div>
        </div>
    </section>
  )
}
