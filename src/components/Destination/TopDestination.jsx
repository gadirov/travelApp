import React from 'react'
import '../HomePage/HomePage.css'
import { destinationData } from './DestinationArray'
export default function TopDestination() {
  return (
    <section>
        <div className="section_2">
            <h1 className='trending-row'>Top Destinations</h1>
            <div className="cards">
            {destinationData.map((item) => <Card key={item.id} {...item} /> )}
            </div>
        </div>
    </section>
  )
}


const Card = ({destinationimage, typeofTrip, tripHeader, days, amount }) => {
  
  const destinationStyle = {
    backgroundImage: `url(${destinationimage})`,
  };
  return (
      <div className="card">
          <div className="image-part" style={destinationStyle}>
          </div>
          <div className="text-part">
              <span>{typeofTrip}</span>
              <h3>{tripHeader}</h3>
              <div>
                <span>{days}</span>
                <p>{amount}</p>
              </div>
          </div>
      </div>
  )
}


