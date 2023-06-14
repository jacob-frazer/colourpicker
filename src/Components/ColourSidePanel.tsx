import React, { useEffect, useContext, useState } from 'react';
import ColorPalette from './ColourPalette';
import ColourContext from '../ColourContext';

import { 
  generateComplimentaryColors, 
  generateAnalogousColors,
  generateMonochromaticColors,
  generateSplitComplementaryColors,
  generateTriadicColors,
} from "../utils/colour_gen"

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
        "Monochromatic": generateMonochromaticColors(colours[0]),
        "Split Complimentary": generateSplitComplementaryColors(colours[0]),
        "Triadic": generateTriadicColors(colours[0]),
        
        
        'Random': ['#800000', '#FFA500', '#000080'],
    }
    setPalettes(generated_palettes);
  };


  const sidePanelStyle: React.CSSProperties = {
    position: 'fixed',
    top: '0',
    right: '0',
    backgroundColor: colours[0],
    borderRadius: '10px',
    border: '3px solid',
    borderColor: colours[1],
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
