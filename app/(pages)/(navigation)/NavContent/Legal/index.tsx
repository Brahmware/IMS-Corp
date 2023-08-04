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

const MenuItemLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textUnderlineOffset: '0.1rem',
  transition: theme.Transitions.createTransition({ property: 'color' }),

  '&:hover': {
    color: theme.palette.text.primary,
  }
}));

const Legal = () => {
  return (
    <LegalWrapper>
      <MenuItemLink href="/visitor-agreement">
        Visitor Agreement
      </MenuItemLink>
      <MenuItemLink href="/privacy-notice">
        Privacy Notice
      </MenuItemLink>
    </LegalWrapper>
  )
}

export default Legal