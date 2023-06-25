import chroma from 'chroma-js';


export function generateComplimentaryColors(hexColor: string): string[] {
  const complementary = chroma(hexColor).saturate(1.5).brighten(2).set('hsl.h', '+180');
  return [hexColor, complementary.hex()];
}

export function generateTriadicColors(hexColor: string): string[] {
  const triadic1 = chroma(hexColor).saturate(1.5).brighten(2).set('hsl.h', '+120');
  const triadic2 = chroma(hexColor).saturate(1.5).brighten(2).set('hsl.h', '-120');
  const hexColor1 = triadic1.hex();
  const hexColor2 = triadic2.hex();
  return [hexColor, hexColor1, hexColor2];
}

export function generateSplitComplementaryColors(hexColor: string): string[] {
  const splitComplementary1 = chroma(hexColor).saturate(1.5).brighten(2).set('hsl.h', '+150');
  const splitComplementary2 = chroma(hexColor).saturate(1.5).brighten(2).set('hsl.h', '+210');
  const hexColor1 = splitComplementary1.hex();
  const hexColor2 = splitComplementary2.hex();
  return [hexColor, hexColor1, hexColor2];
}

export function generateQuadraticColors(hexColor: string): string[] {
  const quadratic1 = chroma(hexColor).saturate(1.5).brighten(2).set('hsl.h', '+90');
  const quadratic2 = chroma(hexColor).saturate(1.5).brighten(2).set('hsl.h', '+180');
  const quadratic3 = chroma(hexColor).saturate(1.5).brighten(2).set('hsl.h', '-90');
  const hexColor1 = quadratic1.hex();
  const hexColor2 = quadratic2.hex();
  const hexColor3 = quadratic3.hex();
  return [hexColor, hexColor1, hexColor2, hexColor3];
}


export function generateAnalogousColors(hexColor: string, count: number): string[] {
  const palette = [hexColor];
  const baseColor = chroma(hexColor);
  const angleIncrement = 30; // Angle increment between each analogous color
  
  for (let i = 1; i < count; i++) {
    const angle = i * angleIncrement;
    const analogousColor = baseColor.set('hsl.h', `+${angle}`).saturate(1.5).brighten(2).hex();
    palette.push(analogousColor);
  }
  
  return palette;
}

export function generateMonochromaticColors(hexColor: string, count: number): string[] {
  const scale = chroma.scale([hexColor, 'white']).mode('lab').correctLightness(true).colors(count);
  return scale.map(color => chroma(color).brighten(1.5).hex());
}

export function generateRandomColors(count: number): string[] {
  const colors: string[] = [];
  for (let i = 0; i < count; i++) {
    colors.push(chroma.random().hex());
  }
  return colors;
}

// selecting algorithm
export function generatePalette(algorithm: string, hexColor: string, count: number): Array<string> {
  switch (algorithm) {
    case "splitComplimentary":
      return generateSplitComplementaryColors(hexColor);

    case "analagous":
      return generateAnalogousColors(hexColor, count);

    case "complimentary":
      return generateComplimentaryColors(hexColor);

    case "monochromatic":
      return generateMonochromaticColors(hexColor, count);

    case "triadic":
      return generateTriadicColors(hexColor);

    case "quadratic":
      return generateQuadraticColors(hexColor);

    case "random":
      return generateRandomColors(count);

    default:
      return generateAnalogousColors(hexColor, count);

  }
  
}