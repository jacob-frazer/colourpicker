import React, { useContext } from 'react';
import ColourContext from '../Contexts/ColourContext';

interface ColorPaletteProps {
  name: string;
  colors: string[];
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ name, colors }) => {
  const context = useContext(ColourContext);
  if (!context) {
    return null; // handle undefined context if needed
  }
  const { colours, setColours } = context;

  const paletteStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
    cursor: 'pointer',
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: 'monospace',
    fontSize: '16px',
    fontWeight: '200',
    marginBottom: '10px',
    color: colours[1],
  };

  const colorsContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
  };

  const colorStyle: React.CSSProperties = {
    width: '50px',
    height: '50px',
    marginRight: '5px',
    borderRadius: '5px',
    borderColor: 'black',
    borderWidth: '2px',
    borderStyle: 'solid',
  };

  return (
    <div style={paletteStyle} onClick={() => setColours(colors)}>
      <div style={titleStyle}>{name}</div>
      <div style={colorsContainerStyle}>
        {colors.map((color) => (
          <div key={name} style={{ ...colorStyle, backgroundColor: color }}></div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
