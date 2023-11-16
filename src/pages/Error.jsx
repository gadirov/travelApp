import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import errorIcon from '../assets/error.png'
export default function Error() {
    const navigate = useNavigate();
  return (
    <section className='error'>
        <img src={errorIcon} alt="" />
        <div className='firstsection'>
            <h2>Page not found</h2>
            <p>Try searching on the home page or go back</p>
        </div>
        <div className='secondsection'>
            <button className='goback' onClick={() => navigate(-1)}>Go back</button>
            <button className='gobackhomepage'><Link to="/">Go back homepage</Link></button>
        </div>
    </section>
  )
}
