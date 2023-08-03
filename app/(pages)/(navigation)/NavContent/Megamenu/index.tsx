import { Box, styled } from '@mui/material';
import React from 'react'

const MegamenuWrapper = styled(Box)(({ theme }) => ({
  gridColumn: '8 / 25',
  gridRow: '1 / 18',
  borderRadius: '1rem',
  backgroundColor: theme.palette.primary.main,
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

const Megamenu = () => {
  return (
    <MegamenuWrapper>Megamenu</MegamenuWrapper>
  )
}

export default Megamenu