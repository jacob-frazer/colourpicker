import { createContext } from 'react';

// use react context to hold + update colour variables
type Colours = string[];
type SetColours = (color: Colours) => void;
const ColourContext = createContext<{ colours: Colours; setColours: SetColours } | undefined>(undefined);

export default ColourContext