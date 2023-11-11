import {React, useEffect} from 'react'
import scrollTopArrowIcon from '..//..//assets/Arrow_Up_SM.svg'


export default function ScrollTopArrowButton() {
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

  }, []);
  
  const scrolltoTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <div className='scroll' onClick={scrolltoTop}>
        <img src={scrollTopArrowIcon} alt="scrollTopArrowIcon" />
    </div>
  )
}
