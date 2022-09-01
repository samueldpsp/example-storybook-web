import { globalCss } from "@stitches/react";
import { mainTheme } from "./main";

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, outline: 'none', boxSizing: 'border-box' },
  'body': {
    fontFamily: mainTheme.fonts.main,
    fontSize: '1rem'
  }
});