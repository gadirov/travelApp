import React from 'react'
import './HomePage.css'
export default function JoinUs() {
  return (
        <section id='joinus-section'>
            <h1>Join our travel revolution</h1>
            <p>
                Sign up to stay in the know - hot new travel spots,<br/> how we strive to make the world a better place, and all sorts of surprises.
            </p>
            <div className="email-part">
                <input type="text" name="text" id="text" placeholder='Email'/>
                <div className="signup">Sign up</div>
            </div>
        </section>
  )
}
