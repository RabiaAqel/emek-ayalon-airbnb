import React from 'react';
import Accordion from './Accordion';
import { accordionData } from './utils/content';

const App = () => {
  return (
    <div>
      <h3>Emek Ayalon 18 Airbnb</h3>
      <h4>Welcome to our Airbnb! We wish you a wonderful stay, and please feel free to reach out if you have any questions.</h4>
      <div className="accordion">
        {accordionData.map(({ title, content }, index) => (
          <Accordion key={index} title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;
