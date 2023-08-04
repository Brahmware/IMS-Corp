import { Button, Typography, styled } from '@mui/material';
import { TranslationIcon as IconTrans } from '@/components/Icons';
import React from 'react'
import TranslationMenu from './TranslationMenu';
import { useNavContext } from '../../Megamenu/NavContext/NavContextProvider';
import navbar from '@/utils/constants/navbar';

const LocaleButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: theme.typography.fontWeightRegular,
  borderRadius: '2rem',
  padding: `${theme.Spaces.xxs} ${theme.Spaces.lg} ${theme.Spaces.xxs} ${theme.Spaces.md}`,
  marginLeft: theme.Spaces.sm,

  '&:hover': {
    backgroundColor: theme.palette.secondary.main,

    '& svg': {
      '& *': {
        fill: theme.palette.secondary.contrastText + ' !important',
      },
    },

    '& .MuiTypography-root': {
      color: theme.palette.secondary.contrastText,
    },
  },
}));

const TranslationIcon = styled(IconTrans)(({ theme }) => ({
  height: '100%',
  marginRight: theme.Spaces.sm,
  transform: `scale(0.75)`,
}));

const ButtonText = styled(Typography)(({ theme }) => ({
  lineHeight: 1,
  fontSize: '0.875rem',
  color: theme.palette.error.contrastText,
  cursor: 'pointer',
}));

const Locale = () => {

  const [localeMenuOpen, setLocaleMenuOpen] = React.useState(false);

  const handleLocaleButtonOnClick = () => {
    setLocaleMenuOpen(!localeMenuOpen);
  };

  const { setCurrentItem } = useNavContext();

  return (
    <React.Fragment>
      <LocaleButton
        disableElevation
        variant="contained"
        color="error"
        onClick={handleLocaleButtonOnClick}
        onMouseEnter={() => setCurrentItem(navbar.translateMedia)}
        onMouseLeave={() => setCurrentItem(navbar.defaultMedia)}
      >
        <TranslationIcon />
        <ButtonText>
          Eng IN
        </ButtonText>
      </LocaleButton>
      <TranslationMenu
        open={localeMenuOpen}
        onClose={() => setLocaleMenuOpen(false)}
      />
    </React.Fragment>
  )
}

export default Locale