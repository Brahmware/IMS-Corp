import { PaletteOptions } from "@mui/material";

const colors = {
  white: '#FFFFFF',
  black: '#2E2E2E',
  bhasma: '#707070',
  rakthalal: '#FF4136',
  matmaila: '#C8C8C8',
  slogan: '#DDDDDD',
  kesar: '#E18F3C',
  komola: '#db633e',
  neelkantha: '#0074D9',
  kolapata: '#2ECC40',
}

export interface CustomPaletteOptions extends PaletteOptions {

}

export const customPaletteLight: CustomPaletteOptions = {
  mode: 'light',
  primary: {
    main: colors.kesar,
    contrastText: colors.white,
  },
  secondary: {
    main: colors.black,
    light: colors.matmaila,
    contrastText: colors.white,
  },
  error: {
    main: colors.rakthalal,
    contrastText: colors.white,
  },
  warning: {
    main: colors.komola,
    contrastText: colors.white,
  },
  info: {
    main: colors.neelkantha,
    contrastText: colors.white,
  },
  success: {
    main: colors.kolapata,
    contrastText: colors.white,
  },
}

export const customPaletteDark: CustomPaletteOptions = {
  mode: 'dark',
  primary: {
    main: colors.kesar,
    contrastText: colors.white,
  },
  secondary: {
    main: colors.white,
    contrastText: colors.black,
  },
  error: {
    main: colors.rakthalal,
    contrastText: colors.white,
  },
  warning: {
    main: colors.komola,
    contrastText: colors.white,
  },
  info: {
    main: colors.neelkantha,
    contrastText: colors.white,
  },
  success: {
    main: colors.kolapata,
    contrastText: colors.white,
  },
}
