import React from 'react'
import { BlogCardDataFirst } from './BlogArray'
export default function BlogCardsSectionFirstPart() {
  return (
    <section>
    <div className="section_2">
        <div className="cards twocards">
        {BlogCardDataFirst.map((item) => <Card key={item.id} {...item} /> )}
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
        <div className="card twocard">
            <div className="image-part" style={destinationStyle}>
            </div>
            <div className="text-part">
                <h3>{header}</h3>
                <span>{text}</span>
            </div>
        </div>
    )
  }