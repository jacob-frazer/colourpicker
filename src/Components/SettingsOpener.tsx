import React, { useState, useContext } from 'react';
import { FiSettings } from 'react-icons/fi';
import ColourContext from '../Contexts/ColourContext';
import SettingsPage from './SettingsPage';

const SettingsIcon: React.FC = () => {
  const [isSettingsVisible, setSettingsVisible] = useState(false);

  const context = useContext(ColourContext);
  if (!context) {
    return null; // handle undefined context if needed
  }

  const { colours, setColours } = context;

  const handleSettingsClick = () => {
    setSettingsVisible(!isSettingsVisible);
  };

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      position: 'fixed',
      bottom: '10px',
      left: '10px',
      zIndex: 9999,
    },
    icon: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: colours[1],
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    },
    overlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9998,
    },
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.icon} onClick={handleSettingsClick}>
        {/* Render your settings icon here */}
        <FiSettings/>
      </div>
      {isSettingsVisible && (
        <div style={styles.overlay} onClick={handleSettingsClick}>
          <SettingsPage/>
        </div>
      )}
    </div>
  );
};

export default SettingsIcon;
