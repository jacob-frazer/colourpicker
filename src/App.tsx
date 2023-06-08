import React, { useContext } from 'react';
import { useState, createContext } from 'react';
import './App.css';

import { HexColorPicker, HexColorInput } from "react-colorful";

import { generateComplimentaryColors, generateAnalogousColors} from "./utils/colour_gen"
import Circle from './Components/Circle';

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
      <div>The main (selected) colour is: {main_colour}</div>
      <Circle colour={main_colour} />
      <div>2nd colour: {colour2}</div>
      <Circle colour={colour2} />
      <div>3rd colour: {colour3}</div>
      <Circle colour={colour3} />
    </>
  )
}


// use react context to hold + update colour variables
type Colour = string;
type SetColour = (color: Colour) => void;
const ColourContext = createContext<{ colour: Colour; setColour: SetColour } | undefined>(undefined);


function App() {
  // generic modern looking app potentially a couple different layouts

  // colour picker to let you select primary, secondary, highlight colours
  // updates the whole page so you can see how they look on a website together

  // needed components colorpicker, routes for different layouts, generic website w/animations
  // 
  const [colour, setColour] = useState<Colour>("000000");

  return (
    <div>
      aaaa
      <ColourContext.Provider value={{colour, setColour}}>
        <CombinedColor/>
        <ReceivesColors/> 
      </ColourContext.Provider>
    </div>
  );
}

export default App;
