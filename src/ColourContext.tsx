import { useState, createContext } from 'react';

// use react context to hold + update colour variables
type Colour = string;
type SetColour = (color: Colour) => void;
const ColourContext = createContext<{ colour: Colour; setColour: SetColour } | undefined>(undefined);

export default ColourContext