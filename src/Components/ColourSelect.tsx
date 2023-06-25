import React, { useContext } from 'react';
import ColourContext from '../Contexts/ColourContext';

import { generateComplimentaryColors, generateAnalogousColors, generatePalette } from "../utils/colour_gen"

import { HexColorPicker, HexColorInput, } from "react-colorful";
import SettingsContext from '../Contexts/SettingsContext';


const CombinedColor = () => {
  const { settings, updateSetting } = useContext(SettingsContext);
  const context = useContext(ColourContext);
  if (!context) {
    return null; // handle undefined context if needed
  }
  const { colours, setColours } = context;

  const gen_set_colours = (c: string) => {
    // if individual select then just change that one colour dont regen whole spectrum
    if (settings.individualColourSelect) {
      let new_colours = colours.slice()
      new_colours[settings.selectedColourIndex] = c
      setColours(new_colours)
    } else {
      let calced_colours = generatePalette(settings.defaultPaletteAlgorithm, c, settings.numberOfColours)
      setColours(calced_colours)
    }
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
      <HexColorPicker color={colours[settings.selectedColourIndex]} onChange={gen_set_colours} style={pickerStyles}/>
      <HexColorInput color={colours[settings.selectedColourIndex]} onChange={gen_set_colours} prefixed={true} style={inputStyles}/>
    </>
  
  );
};

export default CombinedColor