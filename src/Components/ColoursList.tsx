import React, { useContext, useState } from 'react';
import Circle from './Circle';
import ColourContext from '../Contexts/ColourContext';
import { FiClipboard, FiCheck } from 'react-icons/fi';

import SettingsContext from '../Contexts/SettingsContext';

interface ColorListProps {
  colors: string[];
}

const ColourList: React.FC<ColorListProps> = ({ colors }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { settings, updateSetting } = useContext(SettingsContext);
  const context = useContext(ColourContext);
  if (!context) {
    return null; // handle undefined context if needed
  }

  const { colours, setColours } = context;
  

  const backgroundStyle: React.CSSProperties = {
    backgroundColor: colours[0],
    padding: '10px',
    borderRadius: '10px',
    width: '200px',
    position: 'absolute',
    top: '10px',
    left: '10px',
    border: '3px solid',
    borderColor: colours[1],
  };

  const spanStyle: React.CSSProperties = {
    fontFamily: 'monospace',
    fontSize: '16px',
    fontWeight: '200',
    cursor: 'pointer',
    color: colours[1],
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyle: React.CSSProperties = {
    marginLeft: '5px',
    color: colours[1],
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: 'monospace',
    fontSize: '24px',
    fontWeight: '200',
    textAlign: 'center',
    color: colours[1],
    marginBottom: '10px',
  };

  const handleCopyToClipboard = (value: string, index: number) => {
    navigator.clipboard.writeText(value);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  const handleIndividualSelection = (index: number) => {
    if (!settings.individualColourSelect) return

    // logic to give the circle a tick but need to remove it from the other circles?

    // set the selected index as the selected one here
    updateSetting("selectedColourIndex", index)
    console.log(index)
    console.log(settings)
  }

  return (
    <div style={backgroundStyle}>
      <div style={titleStyle}>Current Palette</div>
      {colors.map((color, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
          <Circle colour={color} onClick={() => handleIndividualSelection(i)} />
          <span
            style={{ ...spanStyle, marginLeft: '10px' }}
            onClick={() => handleCopyToClipboard(color, i)}
          >
            {color}
          </span>
          <div style={{ display: 'flex', marginLeft: '5px' }} onClick={() => handleCopyToClipboard(color, i)}>
            {copiedIndex === i ? (
              <FiCheck style={{ ...iconStyle, color: colours[1] }} />
            ) : (
              <FiClipboard style={{ ...iconStyle }} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColourList;
