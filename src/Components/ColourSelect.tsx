import React, { useContext } from 'react';
import ColourContext from '../ColourContext';

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
  return (
    <>
      <HexColorPicker color={colours[0]} onChange={gen_set_colours} />
      {/* 
      <HexColorInput color={colour} onChange={setColour} />
      */}
    </>
  
  );
};

export default CombinedColor