import React, { useEffect, useContext, useState } from 'react';
import ColorPalette from './ColourPalette';
import ColourContext from '../ColourContext';

import { generateComplimentaryColors, generateAnalogousColors} from "../utils/colour_gen"

const SidePanel: React.FC = () => {
  const [palettes, setPalettes] = useState<{ [key: string]: string[] }>({});
  const context = useContext(ColourContext);

  useEffect(() => {
    generatePalettes();
  }, [context?.colours]);

  
  if (!context) {
    return null; // handle undefined context if needed
  }
  const { colours, setColours } = context;

  const generatePalettes = () => {
    const generated_palettes = {
        "Complimentary": generateComplimentaryColors(colours[0]),
        "Analogous": generateAnalogousColors(colours[0]),
        'Palette 3': ['#FF4500', '#00FFFF', '#8A2BE2'],
        'Palette 4': ['#008000', '#FF69B4', '#7FFFD4'],
        'Palette 5': ['#800000', '#FFA500', '#000080'],
    }
    setPalettes(generated_palettes);
  };


  const sidePanelStyle: React.CSSProperties = {
    position: 'fixed',
    top: '0',
    right: '0',
    backgroundColor: 'lightgray',
    borderRadius: '10px',
    padding: '20px',
  };

  
  return (
    <div style={sidePanelStyle}>
      {Object.entries(palettes).map(([name, colors]) => (
        <ColorPalette key={name} name={name} colors={colors}/>
      ))}
    </div>
  );
};

export default SidePanel;
