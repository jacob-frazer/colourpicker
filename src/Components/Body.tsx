import React from 'react';

import CombinedColour from './ColourSelect'

const Body: React.FC = () => {
  const bodyStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={bodyStyle}>
        <CombinedColour/>
    </div>
  );
};

export default Body;
