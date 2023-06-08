import React, { useContext } from 'react';
import ColourContext from '../ColourContext';

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
    const context = useContext(ColourContext);
    if (!context) {
      return null; // handle undefined context if needed
    }
  
    const { colour, setColour } = context;

  const backgroundStyle = {
    backgroundColor: colour,
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return <div style={backgroundStyle}>{children}</div>;
};

export default Background;
