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
import MobileOnly from './Components/MobileOnly';


const App: React.FC<{}> = () => {
  const isMobile = window.innerWidth <= 768;
  const [colours, setColours] = useState(["#374c4c", "#759ed6", "#878ad3"]);

  return (
    <>
      {
      isMobile ?
      <MobileOnly/>
      :
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
      }
    </>
  );
};

export default App;
