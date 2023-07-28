'use client';

import { Button, ButtonBaseProps, styled } from '@mui/material';
import Link from 'next/link';
import React from 'react'

export interface JoinButtonProps extends ButtonBaseProps {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

const JoinButton = styled(Button)<JoinButtonProps>(({ theme }) => ({
  margin: '0 0.5rem',
  padding: '0.5rem 1.5rem',

  borderRadius: '2rem',
  letterSpacing: '0.025rem',
  lineHeight: '1rem',
  fontWeight: theme.typography.fontWeightBold,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
}));

const Join = () => {
  return (
    <Link href="/join">
      <JoinButton
        color="primary"
        disableElevation
        variant="contained"
      >
        Join
      </JoinButton>
    </Link>
  )
}

export default Join;