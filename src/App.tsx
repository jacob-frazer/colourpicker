import React, { useContext } from 'react';
import { useState, createContext } from 'react';
import './App.css';

import { HexColorPicker, HexColorInput } from "react-colorful";

import { generateComplimentaryColors, generateAnalogousColors} from "./utils/colour_gen"
import Circle from './Components/Circle';
import Background from './Components/Background';

import ColourContext from './ColourContext';

const CombinedColor = () => {
  const context = useContext(ColourContext);
  if (!context) {
    return null; // handle undefined context if needed
  }
  
  const { colour, setColour } = context;
  return (
    <>
      <HexColorPicker color={colour} onChange={setColour} />
      <HexColorInput color={colour} onChange={setColour} />
    </>
  
  );
};

const ReceivesColors = () => {
  const context = useContext(ColourContext);
  if (!context) {
    return null; // handle undefined context if needed
  }

  const { colour, setColour } = context;

  //let [main_colour, colour2, colour3] = generateComplimentaryColors(colour);
  let [main_colour, colour2, colour3] = generateAnalogousColors(colour);
  
  return (
    <>
      <Circle colour={main_colour} />
      <Circle colour={colour2} />
      <Circle colour={colour3} />
    </>
  )
}


function App() {
  // generic modern looking app potentially a couple different layouts

  // colour picker to let you select primary, secondary, highlight colours
  // updates the whole page so you can see how they look on a website together

  // needed components colorpicker, routes for different layouts, generic website w/animations
  // 
  const [colour, setColour] = useState("000000");

  return (
    <>
      <ColourContext.Provider value={{colour, setColour}}>
        <Background>
          <CombinedColor/>
          <ReceivesColors/> 
        </Background>
      </ColourContext.Provider>
    </>
  );
}

export default App;
