import { MoonIcon, SunIcon } from '@/components/Icons';
import { useThemeContext } from '@/styles/theme/ThemeContextProvider';
import { Switch, styled } from '@mui/material';

const thumbSvgDataUrl = 'data:image/svg+xml,%3Csvg id=\'Layer_1\' data-name=\'Layer 1\' xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'800\' viewBox=\'0 0 800 800\'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23363636%3B%7D%3C/style%3E%3C/defs%3E%3Cpath class=\'cls-1\' d=\'M400,733.33331c184.09335,0,333.33333-149.24,333.33333-333.33333,0-15.42332-23.11669-17.97332-31.09335-4.77333A216.548,216.548,0,0,1,516.66665,500C397.00332,500,300,402.99665,300,283.33332A216.54773,216.54773,0,0,1,404.77332,97.75866c13.2-7.97633,10.65-31.092-4.77334-31.092C215.905,66.66666,66.66666,215.905,66.66666,400,66.66666,584.09333,215.905,733.33331,400,733.33331Z\'/%3E%3C/svg%3E';

const ThemeChangeSwitch = styled(Switch)(({ theme }) => ({

  '& .MuiTouchRipple-root': {
    display: 'none',
  },

  '&:hover .Mui-thumb': {
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,

    '& svg path': {
      fill: theme.palette.secondary.contrastText,
    },
  },

}));

const Thumb = styled('span')(({ theme }) => ({
  background: theme.palette.primary.main,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transform: 'scale(1.85) translateY(0.75px)',
  transition: 'background 0.1s ease-in-out',

  '& svg': {
    color: theme.palette.primary.contrastText,
    transform: 'scale(0.6)',

    '& path': {
      fill: theme.palette.primary.contrastText,
      transition: 'all 0.1s ease-in-out',
    },
  },
  
}));

const ThemeChangeButton = () => {
  const { mode, setMode } = useThemeContext();


  const isChaked: boolean = mode === 'dark';

  const handleChange = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeChangeSwitch
      icon={<Thumb className='Mui-thumb'> <SunIcon /> </Thumb>}
      checked={isChaked}
      checkedIcon={<Thumb className='Mui-thumb'> <MoonIcon /> </Thumb>}
      onChange={handleChange}
    />
  );
}

export default ThemeChangeButton;
