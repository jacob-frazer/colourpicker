import { createContext } from 'react';

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

export default SettingsContext;