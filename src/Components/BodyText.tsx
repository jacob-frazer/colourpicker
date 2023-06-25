import React, { useContext } from 'react';
import ColourContext from '../Contexts/ColourContext';

interface BodyTextProps {
  text: string;
}

const BodyText: React.FC<BodyTextProps> = ({ text }) => {
  const context = useContext(ColourContext);
  if (!context) {
    return null; // handle undefined context if needed
  }

  const { colours, setColours } = context;
  const textStyle: React.CSSProperties = {
    fontFamily: 'monospace',
    fontWeight: 'lighter',
    fontSize: '18px',
    paddingTop: '10rem',
    color: colours[2] || colours.at(-1),
  };

  return <p style={textStyle}>{text}</p>;
};

export default BodyText;
