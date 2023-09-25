import React from 'react';
import Accordion from './Accordion';
import { accordionData } from './utils/content';

const App = () => {
  return (
    <div>
      <h4>Emek Ayalon 18 Airbnb</h4>
      <h5>Welcome to our Airbnb! We wish you a wonderful stay, and please feel free to reach out if you have any questions.</h5>
      <div className="accordion">
        {accordionData.map(({ title, content }, index) => (
          <Accordion key={index} title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;
