import React from 'react'
import { BlogCardData } from './BlogArray'
export default function BlogCardsSectionSecondPart() {
  return (
    <section>
      <div className="section_2">
          <div className="cards">
          {BlogCardData.map((item) => <Card key={item.id} {...item} /> )}
          </div>
      </div>
    </section>
  )
}



const Card = ({image, header, text}) => {
  
    const destinationStyle = {
      backgroundImage: `url(${image})`,
    };
    return (
        <div className="card">
            <div className="image-part" style={destinationStyle}>
            </div>
            <div className="text-part">
                <h3>{header}</h3>
                <span>{text}</span>
            </div>
        </div>
    )
  }