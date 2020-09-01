export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (result) {
    return {
      red: parseInt(result[1], 16),
      green: parseInt(result[2], 16),
      blue: parseInt(result[3], 16),
    };
  }

  return null;
}
function componentToHex(c) {
  const hex = c.toString(16).slice(0, 2);
  return hex.length == 1 ? '0' + hex : hex;
}

export function rgbToHex({red, green, blue}) {
  return (
    '#' + componentToHex(red) + componentToHex(green) + componentToHex(blue)
  );
}

/*
Function that receives 2 RGB colors and return a HEX color based on the percentage given. 
This crestes Linear Gradient slider effect.
*/

export function generateGradient(color1, color2, percent) {
  const rgbColor1 = hexToRgb(color1);
  const rgbColor2 = hexToRgb(color2);

  const red = rgbColor1.red + percent * (rgbColor2.red - rgbColor1.red);
  const green = rgbColor1.green + percent * (rgbColor2.green - rgbColor1.green);
  const blue = rgbColor1.blue + percent * (rgbColor2.blue - rgbColor1.blue);

  return rgbToHex({red, green, blue});
}
