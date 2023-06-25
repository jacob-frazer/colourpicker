import React, { useContext } from 'react';
import ColourContext from '../Contexts/ColourContext';

const Footer: React.FC = () => {
  const context = useContext(ColourContext);
  if (!context) {
    return null; // handle undefined context if needed
  }

  const { colours, setColours } = context;

  const footerStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    fontFamily: 'monospace',
    fontSize: '16px',
    fontWeight: '200',
    color: colours.at(-1),
    textDecoration: 'none',
  };

  return (
    <a href="https://jacobfrazer.co.uk" style={footerStyle}>
      Colo.ur created by CobTechnologies
    </a>
  );
};

export default Footer;
