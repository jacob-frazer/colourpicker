import React from 'react';

import CombinedColour from './ColourSelect'
import BodyText from './BodyText';

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
        <BodyText text="your home for beautiful palettes"/>
    </div>
  );
};

export default Body;
