import React from 'react';
import Accordion from './Accordion';
import { accordionData } from './utils/content';

const App = () => {
  return (
    <div>
      <h1>Emek Ayalon 18 Airbnb</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }, index) => (
          <Accordion key={index} title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;
