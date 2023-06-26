import React, { useContext } from 'react';

import ColourContext from '../Contexts/ColourContext';
import Favicon from './Favicon';

const Header: React.FC = () => {
    const context = useContext(ColourContext);
    if (!context) {
      return null; // handle undefined context if needed
    }
  
    const { colours, setColours } = context;

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '48px',
    fontWeight: '200',
    padding: '10px',
    borderRadius: '10px',
    marginBottom: '20px',
  };

  return (
    <div style={headerStyle}>
      <Favicon/>
      <div style={{ border: '2px solid', borderRadius: '10px', borderColor: colours[1], padding: '10px', color: colours[1] }}>Colo.ur</div>
    </div>
  );
};

export default Header;
