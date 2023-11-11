import React from 'react'
import { destinationAttractionsCard } from './DestinationItalyArray'
export default function DestinationAttractionsCard() {
  return (
    <section>
      <div className="section_2">
          <h1 className='trending-row'>Must-see attractions for your itinerary</h1>
          <div className="cards">
          {destinationAttractionsCard.map((item) => <Card key={item.id} {...item} /> )}
          </div>
      </div>
  </section>
  )
}


const Card = ({ destinationimage, typeofTrip, tripHeader }) => {
  
  const destinationStyle = {
    backgroundImage: `url(${destinationimage})`,
  };
  return (
      <div className="card">
          <div className="image-part" style={destinationStyle}>
          </div>
          <div className="text-part">
              <h2>{typeofTrip}</h2>
              <p>{tripHeader}</p>
          </div>
      </div>
  )
}
