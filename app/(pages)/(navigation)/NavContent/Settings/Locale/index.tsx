import { Button, Typography, styled } from '@mui/material';
import { TranslationIcon as IconTrans } from '@/components/Icons';
import React from 'react'
import TranslationMenu from './TranslationMenu';

const LocaleButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: theme.typography.fontWeightRegular,
  borderRadius: '2rem',
  padding: `${theme.Spaces.xxs} ${theme.Spaces.sm}`,
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
  marginRight: theme.Spaces.xs,
  transform: 'scale(0.77)',
}));

const ButtonText = styled(Typography)(({ theme }) => ({
  lineHeight: 1,
  color: theme.palette.error.contrastText,
  cursor: 'pointer',
}));

const Locale = () => {

  const [localeMenuOpen, setLocaleMenuOpen] = React.useState(false);

  const handleLocaleButtonOnClick = () => {
    setLocaleMenuOpen(!localeMenuOpen);
  };

  return (
    <React.Fragment>
      <LocaleButton
        disableElevation
        variant="contained"
        color="error"
        onClick={handleLocaleButtonOnClick}
      >
        <TranslationIcon />
        <ButtonText variant="body1">
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