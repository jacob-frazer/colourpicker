import { useState } from 'react';
import './App.css';

import ColourList from './Components/ColoursList';
import SidePanel from './Components/ColourSidePanel';
import Background from './Components/Background';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Settings from './Components/Settings';

import ColourContext from './Contexts/ColourContext';
import { SettingsProvider } from './Contexts/SettingsContext';


function App() {
  const [colours, setColours] = useState(["#0a051f", "#b200ff", "#004cff"]);

  return (
    <>
      <ColourContext.Provider value={{colours, setColours}}>
      <SettingsProvider>
        <Background>
          <ColourList colors={colours}/>
          <SidePanel/>
          <Header/>
          <Body/>
          <Settings/>
          <Footer/>
        </Background>
      </SettingsProvider>
      </ColourContext.Provider>
    </>
  );
}

export default App;
