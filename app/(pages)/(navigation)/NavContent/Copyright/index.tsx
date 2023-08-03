import { Box, Typography, styled } from '@mui/material';
import React from 'react';

const CopyrightWrapper = styled(Box)(({ theme }) => ({
  gridColumn: '1 / 8',
  gridRow: '25 / 26',
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
}));

const Copyright = () => {

  const thisYear = new Date().getFullYear();

  return (
    <CopyrightWrapper>
      <Typography variant="h6" component="h3">
        © {thisYear} Indian Media Syndicate. All rights reserved.
      </Typography>
    </CopyrightWrapper>
  )
}

export default Copyright