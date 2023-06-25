import React, { useContext } from 'react';
import ColourContext from '../Contexts/ColourContext';
import SettingsContext from '../Contexts/SettingsContext';

interface ColorPaletteProps {
  name: string;
  colors: string[];
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ name, colors }) => {
  const { settings, updateSetting } = useContext(SettingsContext);
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

  const camelCase = (str: String) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

  const handleClick = () => {
    setColours(colors);
    updateSetting("defaultPaletteAlgorithm", camelCase(name));
  }

  return (
    <div style={paletteStyle} onClick={() => handleClick()}>
      <div style={titleStyle}>{name}</div>
      <div style={colorsContainerStyle}>
        {colors.map((color, i) => (
          <div key={name+i} style={{ ...colorStyle, backgroundColor: color }}></div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
