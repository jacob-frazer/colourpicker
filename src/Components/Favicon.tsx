import React, { useEffect, useContext } from 'react';
import ColourContext from '../Contexts/ColourContext';

const Favicon: React.FC = () => {
  const context = useContext(ColourContext);
  const { colours } = context;

  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');

    if (!ctx) return        // handle possibility of null ctx

    // Draw favicon background
    ctx.fillStyle = colours[0];
    ctx.fillRect(0, 0, 16, 16);

    // Draw foreground text
    ctx.font = '12px sans-serif';
    ctx.fillStyle = colours.at(-1) || colours[1];
    ctx.fillText('C', 3, 13);

    // Set the modified favicon as the page's favicon
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    favicon.href = canvas.toDataURL();

    // Clean up the canvas
    canvas.remove();
  }, [colours]);

  

  return null;
};

export default Favicon;
