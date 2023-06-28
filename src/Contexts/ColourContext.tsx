import { createContext } from 'react';

type Colours = string[];
type SetColours = (color: Colours) => void;
const defaultColours: Colours = ["#374c4c", "#759ed6", "#878ad3"]; // Set your desired default colours here

const ColourContext = createContext<{ colours: Colours; setColours: SetColours }>({
  colours: defaultColours,
  setColours: () => {},
});

export default ColourContext;
