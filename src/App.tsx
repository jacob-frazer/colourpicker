import React, { useContext } from 'react';
import { useState, createContext } from 'react';
import './App.css';

import { HexColorPicker, HexColorInput } from "react-colorful";

const CombinedColor = () => {
  const {colour, setColour} = useContext(ColourContext);
  return (
    <>
      <HexColorPicker color={colour} onChange={setColour} />
      <HexColorInput color={colour} onChange={setColour} />
    </>
  
  );
};

const ReceivesColors = () => {
  
  const {colour, setColour} = useContext(ColourContext);
  return (
    <div>Current colours are: {colour}</div>
  )
}

 // use react context to hold + update colour variables
 const ColourContext = createContext({
  colour: "#000",
  setColour: () => {}
 });


function App() {
  // generic modern looking app potentially a couple different layouts

  // colour picker to let you select primary, secondary, highlight colours
  // updates the whole page so you can see how they look on a website together

  // needed components colorpicker, routes for different layouts, generic website w/animations
  // 
  const [colour, setColour] = useState("000000");
  const value = {colour, setColour}
 

  return (
    <div>
      aaaa
      <ColourContext.Provider value={value}>
        <CombinedColor/>
        <ReceivesColors/> 
      </ColourContext.Provider>
    </div>
  );
}

export default App;
