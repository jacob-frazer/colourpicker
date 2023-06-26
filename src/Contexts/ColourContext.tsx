import { createContext } from 'react';

type Colours = string[];
type SetColours = (color: Colours) => void;
const defaultColours: Colours = ["#0a051f", "#b200ff", "#004cff"]; // Set your desired default colours here

const ColourContext = createContext<{ colours: Colours; setColours: SetColours }>({
  colours: defaultColours,
  setColours: () => {},
});

export default ColourContext;
