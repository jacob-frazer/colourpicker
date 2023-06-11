import React from 'react';
import Circle from './Circle';

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

const ColourList: React.FC<ColorListProps> = ({ colors }) => {
    const isLightBackground = colors.some((color) => getLuminance(color) > 0.5);
  
    const backgroundStyle: React.CSSProperties = {
        backgroundColor: isLightBackground ? 'lightgray' : 'darkgray',
        padding: '10px',
        borderRadius: '10px',
        width: '200px',
        position: 'absolute',
        top: '10px',
        left: '10px',
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
        {colors.map((color) => (
          <div key={color} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
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
