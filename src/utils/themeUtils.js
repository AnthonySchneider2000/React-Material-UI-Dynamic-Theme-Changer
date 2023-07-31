// themeUtils.js

import { createTheme } from "@mui/material/styles";
import tinycolor from "tinycolor2";

function lightenColor(primaryColor, amount) {
  const baseColor = tinycolor(primaryColor);
  const lightenedColor = baseColor.lighten(amount).toHexString();
  return lightenedColor;
}

function darkenColor(primaryColor, amount) {
  const baseColor = tinycolor(primaryColor);
  const darkenedColor = baseColor.darken(amount).toHexString();
  return darkenedColor;
}

export const handleThemeChange = (userInputColor) => {
  const secondaryColor = darkenColor(userInputColor, 16);
  const backgroundColorDefault = lightenColor(userInputColor, 6);
  const backgroundColorPaper = lightenColor(userInputColor, 4);
  const themeMode = colorIsDark(userInputColor) ? "dark" : "light";

  const updatedTheme = createTheme({
    palette: {
      primary: {
        main: userInputColor,
      },
      secondary: {
        main: secondaryColor,
      },
      background: {
        default: backgroundColorDefault,
        paper: backgroundColorPaper,
      },
      mode: themeMode,
    },
    // Additional theme customizations...
  });

  return updatedTheme;
};

export const colorIsDark = (hexColor) => {
  const threshold = 76; // this is the closest match I could find for the default material UI value
  const baseColor = tinycolor(hexColor);
  const luminance = baseColor.getLuminance() * 255;
  return luminance < threshold;
};
