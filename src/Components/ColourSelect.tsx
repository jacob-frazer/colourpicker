import React, { useContext } from 'react';
import ColourContext from '../Contexts/ColourContext';

import { generateComplimentaryColors, generateAnalogousColors} from "../utils/colour_gen"

import { HexColorPicker, HexColorInput, } from "react-colorful";


const CombinedColor = () => {
  const context = useContext(ColourContext);
  if (!context) {
    return null; // handle undefined context if needed
  }

  const { colours, setColours } = context;
  const gen_set_colours = (c: string) => {
    let calced_colours = generateAnalogousColors(c)
    setColours(calced_colours)
  }

  const pickerStyles = {
    padding: '10px 0 30px 0',
  }

  const inputStyles = {
    width: '200px',
    height: '40px',
    padding: '5px',
    borderRadius: '20px',
    border: 'none',
    backgroundColor: 'transparent',
    color: colours[1],
    outline: 'none',
    boxShadow: '0 0 5px rgba(255, 255, 255, 0.5)',
    fontSize: '16px',
    
  };

  return (
    <>
      <HexColorPicker color={colours[0]} onChange={gen_set_colours} style={pickerStyles}/>
      <HexColorInput color={colours[0]} onChange={gen_set_colours} prefixed={true} style={inputStyles}/>
    </>
  
  );
};

export default CombinedColor