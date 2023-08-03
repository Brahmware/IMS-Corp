import React, { useState } from 'react';
import { Box, Snackbar, Typography, styled } from '@mui/material';
import contact from '@constants/contact';
import SocialsSection from './SocialsSection';

const ContactWrapper = styled(Box)(({ theme }) => ({
  gridColumn: '1 / 6',
  gridRow: '19 / 24',
  borderRadius: '1rem',
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'end',

  '& > *': {
    margin: `${theme.Spaces.xs} 0`,

    '&:first-child': {
      marginTop: 0,
    },

    '&:last-child': {
      marginBottom: 0,
    },
  },
}));

const EmailString = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  cursor: 'pointer',
}));

const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
  '& .MuiSnackbarContent-root': {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    minWidth: 'unset',
    minHeight: 'unset',
    width: 'max-content',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '2em',
    padding: `0 ${theme.Spaces.sm}`,
    fontWeight: theme.typography.fontWeightMedium,
  }
}));

const anchorOrigin: any = {
  vertical: 'bottom',
  horizontal: 'center',
};



const Contact = () => {

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleCopyToClipboard = () => {
    try {
      const isSupported = navigator.clipboard && navigator.clipboard.writeText;
      if (!isSupported) {
        throw new Error('Copy to clipboard not supported');
      }

      const textCoppied = navigator.clipboard.writeText(contact.email);
      if (!textCoppied) {
        throw new Error('Text not coppied');
      }
      setIsSnackbarOpen(true);

    } catch (error) {
      setIsSnackbarOpen(false);
    };
  };

  return (
    <React.Fragment>
      <ContactWrapper>
        <Typography variant='h4' component='h4'>
          Contact Us
        </Typography>
        <EmailString onClick={handleCopyToClipboard}>
          namaste@indianmediasyndicate.com
        </EmailString>
        <SocialsSection />
      </ContactWrapper>
      <StyledSnackbar
        open={isSnackbarOpen}
        message='Email copied to clipboard'
        onClose={() => setIsSnackbarOpen(false)}
        anchorOrigin={anchorOrigin}
        autoHideDuration={2000}
      />
    </React.Fragment>
  )
}

export default Contact