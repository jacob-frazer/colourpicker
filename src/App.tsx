import React, { useContext } from 'react';
import { useState, createContext } from 'react';
import './App.css';

import { generateComplimentaryColors, generateAnalogousColors} from "./utils/colour_gen"
import ColourList from './Components/ColoursList';
import SidePanel from './Components/ColourSidePanel';
import Background from './Components/Background';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Settings from './Components/SettingsOpener';

import ColourContext from './Contexts/ColourContext';


// TODO:
// break the above functional components to own function
// pass these into a body function which should now centre it? - make them centre themselves?
// change styling of header to be cool + larger + take colour from selection


function App() {
  // generic modern looking app potentially a couple different layouts

  // colour picker to let you select primary, secondary, highlight colours
  // updates the whole page so you can see how they look on a website together

  // needed components colorpicker, routes for different layouts, generic website w/animations
  // 
  
  const [colours, setColours] = useState(["#0a051f", "#b200ff", "#004cff"]);

  return (
    <>
      <ColourContext.Provider value={{colours, setColours}}>
        <Background>
          <ColourList colors={colours}/>
          <SidePanel/>
          <Header/>
          <Body/>
          <Settings/>
          <Footer/>
        </Background>
      </ColourContext.Provider>
    </>
  );
}

export default App;
