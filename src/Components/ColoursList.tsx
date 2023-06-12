import React, { useContext } from 'react';
import Circle from './Circle';

import ColourContext from '../ColourContext';

interface ColorListProps {
  colors: string[];
}


function getLuminance(color: string): number {
  // Extract RGB values from the color
  const hexColor = color.replace('#', '');
  const red = parseInt(hexColor.substr(0, 2), 16);
  const green = parseInt(hexColor.substr(2, 2), 16);
  const blue = parseInt(hexColor.substr(4, 2), 16);

  // Calculate relative luminance using the formula for sRGB colors
  const r = red / 255;
  const g = green / 255;
  const b = blue / 255;

  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance;
}

// this needs to be hidden by default on mobile and brought up by tapping icon?

const ColourList: React.FC<ColorListProps> = ({ colors }) => {
    const context = useContext(ColourContext);
    if (!context) {
      return null; // handle undefined context if needed
    }
  
    const { colours, setColours } = context;

    const isLightBackground = colours.some((color) => getLuminance(color) > 0.5);
  
    const backgroundStyle: React.CSSProperties = {
        backgroundColor: isLightBackground ? 'lightgray' : 'darkgray',
        padding: '10px',
        borderRadius: '10px',
        width: '200px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        borderColor: colours[1],
      };
    
    const spanStyle: React.CSSProperties = {
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px',
        fontWeight: 'bold',
        cursor: 'pointer'
    };
  
    const handleCopyToClipboard = (value: string) => {
      navigator.clipboard.writeText(value);
      alert('Copied!');
    };

    return (
      <div style={backgroundStyle}>
        {colours.map((color, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <Circle 
                colour={color} 
                onClick={() => handleCopyToClipboard(color)}
            />
            <span 
              style={{ ...spanStyle, marginLeft: '10px' }}
              onClick={() => handleCopyToClipboard(color)}
            >
              {color}
            </span>

          </div>
        ))}
      </div>
    );
  };
  
  export default ColourList;
