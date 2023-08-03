import { MoonIcon, SunIcon } from '@/components/Icons';
import { useThemeContext } from '@/styles/theme/ThemeContextProvider';
import { Switch, SwitchProps, styled } from '@mui/material';

const ThemeChangeSwitch = styled(Switch)(({ theme, checked }) => ({

  '&:hover .Mui-thumb': {
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,

    '& svg path': {
      fill: theme.palette.secondary.contrastText,
    },
  },

  '&:has(.Mui-checked)': {
    transform: `translateX(-${theme.Spaces.xs})`,
  },
}));

const Thumb = styled('span')(({ theme }) => ({
  background: theme.palette.primary.main,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transform: 'scale(1.65) translateY(0.75px)',
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
