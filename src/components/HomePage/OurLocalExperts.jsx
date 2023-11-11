import {React, useEffect, useState} from 'react'
// import vectorleft from '..//..//assets/Vectorleft.png'
// import vectorright from '..//..//assets/Vectorright.png'
import leftside from '..//..//assets/leftCallcenter.png'
import rightside from '..//..//assets/rightCallcenter.png'
import leftsideforsmallsize from '..//..//assets/left-callcenter-smallsize.png'
import rightsideforsmallsize from '..//..//assets/right-callcenter-smallsize.png'
import './HomePage.css'
export default  function OurLocalExperts () {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 850);
    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 850);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    
    return (
      <section>
        <div className="section-4">
          <h1>Our Local Experts</h1>
          <OurLocalExpertsCard isSmallScreen={isSmallScreen} />
        </div>
      </section>
    );
}

const OurLocalExpertsCard = ({isSmallScreen}) => {
    return(
        <div className={isSmallScreen ? "ourLocalExpertsforsmallsize" : "ourLocalExperts"}>
           <img src={isSmallScreen ? leftsideforsmallsize : leftside} alt="img" className="left-img" />
           <img src={isSmallScreen ? rightsideforsmallsize : rightside} alt="img" className='right-img' />
        </div>
    )
}