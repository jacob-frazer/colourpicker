import React, { useContext } from 'react';
import { useState, createContext } from 'react';
import './App.css';

import { HexColorPicker, HexColorInput, } from "react-colorful";

import { generateComplimentaryColors, generateAnalogousColors} from "./utils/colour_gen"
import ColourList from './Components/ColoursList';
import Background from './Components/Background';

import ColourContext from './ColourContext';

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

const ReceivesColors = () => {
  const context = useContext(ColourContext);
  if (!context) {
    return null; // handle undefined context if needed
  }

  const { colours, setColours } = context;

  //let [main_colour, colour2, colour3] = generateComplimentaryColors(colour);
  //let [main_colour, colour2, colour3] = generateAnalogousColors(colour);
  
  return (
    <>
      <ColourList colors={colours}/>
    </>
  )
}


function App() {
  // generic modern looking app potentially a couple different layouts

  // colour picker to let you select primary, secondary, highlight colours
  // updates the whole page so you can see how they look on a website together

  // needed components colorpicker, routes for different layouts, generic website w/animations
  // 
  const [colours, setColours] = useState(["000000", "40E0D0", "D5CAFF"]);

  return (
    <>
      <ColourContext.Provider value={{colours, setColours}}>
        <Background>
          <CombinedColor/>
          <ReceivesColors/> 
        </Background>
      </ColourContext.Provider>
    </>
  );
}

export default App;
