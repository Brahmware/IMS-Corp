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

const CopyRightText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: theme.typography.fontSize * 1.2,
  fontWeight: theme.typography.fontWeightBold,
  margin: 0,
  whiteSpace: 'nowrap',
}));

const Copyright = () => {

  const thisYear = new Date().getFullYear();

  return (
    <CopyrightWrapper>
      <CopyRightText as="h3">
        © {thisYear} Indian Media Syndicate. All rights reserved.
      </CopyRightText>
    </CopyrightWrapper>
  )
}

export default Copyright