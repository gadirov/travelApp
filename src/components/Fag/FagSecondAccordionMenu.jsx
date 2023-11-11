import React, { useState } from 'react'
import openIcon from '..//..//assets/fag/plusicon.svg'
import closeIcon from '..//..//assets/fag/xicon.svg'
import { cardsInfo } from './FagArray'
import './Fag.css'
export default function FagSecondAccordionMenu() {
  return (
    <section>
        <div className="accordion-menu">
            {cardsInfo.map((item) =>  < Accordion key={item.id} {...item}/>)}
        </div>
    </section>
  )
}


const Accordion = ({number, text, secondText}) => {
    
    const [isActive, setIsActive] = useState(false)
    return(
        <>
        <div className="accordion-cards">
            <p className='number'>{number}</p>
            <div className="text">
                <p>{text}</p>
                <div className={isActive ? "active" : "not-active" }>{secondText}</div>
            </div>
            <div className='toggle' onClick={() => setIsActive(!isActive)}  style={{backgroundColor: !isActive ? "#F5F7FA" : "#4A21EF"}}> <img src={!isActive ? openIcon : closeIcon} alt="" /></div>
        </div>
        </>
    )
}