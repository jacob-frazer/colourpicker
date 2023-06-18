import React, { useContext } from 'react';
import ColourContext from '../Contexts/ColourContext';

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
    const context = useContext(ColourContext);
    if (!context) {
      return null; // handle undefined context if needed
    }
  
    const { colours, setColours } = context;

  const backgroundStyle = {
    backgroundColor: colours[0],
    width: '100%',
    height: '100vh',
  };

  return <div style={backgroundStyle}>{children}</div>;
};

export default Background;
