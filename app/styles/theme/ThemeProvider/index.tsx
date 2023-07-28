
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { useThemeContext } from '../ThemeContextProvider';
import { themeDark, themeLight } from '..';

const ThemeProvider = (
  {
    children
  }: {
    children:
    React.ReactNode
  }
) => {

  const { mode } = useThemeContext();

  return (
    <MuiThemeProvider theme={mode === 'dark' ? themeDark : themeLight}>
      {children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider