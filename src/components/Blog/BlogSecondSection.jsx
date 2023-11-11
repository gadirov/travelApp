import React, { useState } from 'react';
import './Blog.css';

export default function BlogSecondSection() {
  
  const [selectedButton, setSelectedButton] = useState(0);

  const buttonLabels = [
    'All Article',
    'Food & Drink',
    'Inspiration',
    'Local Guides',
    'See & Do',
    'Travel Tips',
    'Where to stay',
  ];

  const handleButtonClick = (index) => {
    setSelectedButton(index === selectedButton ? null : index);
  };

  return (
    <section>
      <div className="card-button">
        {buttonLabels.map((label, index) => (
          <div key={index} className={index === selectedButton ? 'selected-button' : ''} onClick={() => handleButtonClick(index)} >
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}

