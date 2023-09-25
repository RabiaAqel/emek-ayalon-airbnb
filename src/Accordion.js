import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content fadeIn"><div className="fadeIn">{content.split(';').map(e => <p>{e}<br/><br/></p>) }</div></div>}
    </div>
  );
};

export default Accordion;
