import { Box, styled } from '@mui/material';
import Link from 'next/link';
import React from 'react'

const LegalWrapper = styled(Box)(({ theme }) => ({
  gridColumn: '17 / 25',
  gridRow: '25 / 26',
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  fontSize: '1rem',
  fontWeight: 500,

  '& a': {
    '&:first-child': {
      marginRight: theme.Spaces.xs,
    },

    '&:last-child': {
      marginRight: 0,
      marginLeft: theme.Spaces.xs,
    }
  }
}));

const Legal = () => {
  return (
    <LegalWrapper>
      <Link href="/visitor-agreement">
        Visitor Agreement
      </Link>
      <Link href="/privacy-notice">
        Privacy Notice
      </Link>
    </LegalWrapper>
  )
}

export default Legal