export function generateComplimentaryColors(hexColor: string): [string, string, string] {
    // Convert hex color to RGB
    const rgbColor = hexToRgb(hexColor);
  
    // Generate complementary colors by rotating the hue by 180 degrees
    const hue = rgbToHue(rgbColor);
    const hue1 = (hue + 180) % 360;
    const hue2 = (hue + 180) % 360;
  
    // Convert the hue back to RGB
    const rgbColor1 = hueToRgb(hue1);
    const rgbColor2 = hueToRgb(hue2);
  
    // Convert RGB to hex
    const hexColor1 = rgbToHex(rgbColor1);
    const hexColor2 = rgbToHex(rgbColor2);
  
    return [hexColor, hexColor1, hexColor2];
  }
  
  function hexToRgb(hexColor: string): [number, number, number] {
    const hex = hexColor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return [r, g, b];
  }
  
  function rgbToHue([r, g, b]: [number, number, number]): number {
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    if (min === max) {
      return 0;
    }
    const delta = max - min;
    let hue = 0;
    if (r === max) {
      hue = (g - b) / delta;
    } else if (g === max) {
      hue = 2 + (b - r) / delta;
    } else {
      hue = 4 + (r - g) / delta;
    }
    hue *= 60;
    if (hue < 0) {
      hue += 360;
    }
    return Math.round(hue);
  }
  
  function hueToRgb(hue: number): [number, number, number] {
    const h = hue / 60;
    const c = 255;
    const x = (1 - Math.abs((h % 2) - 1)) * 255;
    let r = 0;
    let g = 0;
    let b = 0;
    if (h >= 0 && h < 1) {
      [r, g, b] = [c, x, 0];
    } else if (h >= 1 && h < 2) {
      [r, g, b] = [x, c, 0];
    } else if (h >= 2 && h < 3) {
      [r, g, b] = [0, c, x];
    } else if (h >= 3 && h < 4) {
      [r, g, b] = [0, x, c];
    } else if (h >= 4 && h < 5) {
      [r, g, b] = [x, 0, c];
    } else {
      [r, g, b] = [c, 0, x];
    }
    return [Math.floor(r), Math.floor(g), Math.floor(b),];
  }
  
  function rgbToHex([r, g, b]: [number, number, number]): string {
    const hexR = r.toString(16).padStart(2, "0");
    const hexG = g.toString(16).padStart(2, "0");
    const hexB = b.toString(16).padStart(2, "0");
    return `#${hexR}${hexG}${hexB}`;
  }

  export function generateAnalogousColors(hexColor: string): [string, string, string] {
    // Convert hex color to RGB
    const rgbColor = hexToRgb(hexColor);
  
    // Generate analogous colors by shifting the hue slightly
    const hue = rgbToHue(rgbColor);
    const hue1 = (hue + 30) % 360;
    const hue2 = (hue + 330) % 360;
  
    // Convert the hue back to RGB
    const rgbColor1 = hueToRgb(hue1);
    const rgbColor2 = hueToRgb(hue2);
  
    // Convert RGB to hex
    const hexColor1 = rgbToHex(rgbColor1);
    const hexColor2 = rgbToHex(rgbColor2);
  
    return [hexColor, hexColor1, hexColor2];
  }