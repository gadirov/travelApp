import React, { useEffect, useState } from 'react'
import { CountryList } from './DestinationArray'
import { Link } from 'react-router-dom'
import narrowDownIcon  from '..//..//assets/narrow_Down.svg'
import './Destination.css'
export default function DestionationSecondSection() {
  const [mobileList, setMobileList] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setMobileList(window.innerWidth <= 800);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id='section2'>
        {!mobileList && 
          <div className='section2'>
              { CountryList.map((item) => <Section2 key={item.id} {...item} /> )}
          </div>}

        {mobileList && 
          <div>
            { CountryList.map((item) => < Section2MobileVersion  key={item.id} {...item}/>)}
          </div>}
    </section>
  )
}



const Section2 = ({country, countryName1, countryName2, countryName3, countryName4, countryName5, countryName6, countryName7, countryName8, countryName9, countryName10}) => {
  return(
    <div className="list">
      <p>{country}</p>
      <ul>
        <li>{countryName1}</li>
        <li>{countryName2}</li>
        <li>{countryName3}</li>
        <li>{countryName4}</li>
        <li>{countryName5}</li>
        <li>{countryName6}</li>
        <li>{countryName7}</li>
        {countryName8 === "Italy" ? <li><Link to="italy">{countryName8}</Link></li> : <li>{countryName8}</li>}
        <li>{countryName9}</li>
        <li>{countryName10}</li>
      </ul>
  </div>
  )
}

const Section2MobileVersion = ({ country, countryName1, countryName2, countryName3, countryName4, countryName5, countryName6, countryName7, countryName8, countryName9, countryName10}) => {
  const [isdropdown, setIsDropDown] = useState(false);
  return(
    <div className='section2-mobileversion'>
      <div>
      <p>{country}</p>
      <ul className={isdropdown ? "dropdown-active" : "dropdown-not-active"}>
          <li>{countryName1}</li>
          <li>{countryName2}</li>
          <li>{countryName3}</li>
          <li>{countryName4}</li>
          <li>{countryName5}</li>
          <li>{countryName6}</li>
          <li>{countryName7}</li>
          {countryName8 === "Italy" ? <li><Link to="italy">{countryName8}</Link></li> : <li>{countryName8}</li>}
          <li>{countryName9}</li>
          <li>{countryName10}</li>
        </ul>
      </div>
      <img src={narrowDownIcon} alt="narrowDownInon" onClick={() => setIsDropDown(!isdropdown)} />
    </div>
  )
}