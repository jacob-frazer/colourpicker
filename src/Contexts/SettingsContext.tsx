import { createContext, useState } from 'react';

interface Settings {
  [key: string]: any;
}

interface SettingsContextProps {
  settings: Settings;
  updateSetting: (key: string, value: any) => void;
}

const SettingsContext = createContext<SettingsContextProps>({
  settings: {},
  updateSetting: () => {},
});

export const SettingsProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>({
    "individualColourSelect": false,
    "selectedColourIndex": 0,
    "numberOfColours": 3,
    "defaultPaletteAlgorithm": ""
  });

  const updateSetting = (key: string, value: any) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [key]: value,
    }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSetting }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;