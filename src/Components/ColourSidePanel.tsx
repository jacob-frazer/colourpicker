import React, { useEffect, useContext, useState } from 'react';
import ColorPalette from './ColourPalette';
import ColourContext from '../Contexts/ColourContext';

import { generatePalette} from "../utils/colour_gen"

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
    const algos = [
      "complimentary",
      "analogous",
      "monochromatic",
      "splitComplimentary",
      "triadic",
      "random",
    ];
    const generatedPalettes: { [key: string]: string[] } = {};
    
    for (const algo of algos) {
      generatedPalettes[algo] = generatePalette(algo, colours[0]);
    };
    setPalettes(generatedPalettes);
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
