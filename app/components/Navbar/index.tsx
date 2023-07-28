'use client';

import { Card, styled } from '@mui/material'
import React from 'react'
import { IMSLogoFull } from '@components/Logo';
import Toolbar from '@components/Navbar/Toolbar';

const Bar = styled(Card)(({ theme }) => ({
  width: '100%',
  borderRadius: 0,
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  zIndex: '500',
  backgroundColor: theme.palette.background.default,
  transition: theme.Transitions.createTransition(),
  height: theme.Heights.header.expanded,
}));

const BarContent = styled('div')(({ theme }) => ({
  height: '100%',
  width: '100%',
  maxWidth: theme.breakpoints.values.xl,
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto auto auto',
  alignItems: 'center',
  alignContent: 'center',
}));

const Logo = styled('a')(({ theme }) => ({
  height: '100%',
  width: 'max-content',
}));

const LogoIcon = styled(IMSLogoFull)(({ theme }) => ({
  height: '3.5rem',
  padding: `${theme.Spaces.xs} ${theme.Spaces.sm}`,
}));

const Navbar = () => {
  return (
    <Bar elevation={4}>
      <BarContent>
        <Logo href="/">
          <LogoIcon />
        </Logo>
        <Toolbar />
      </BarContent>
    </Bar>
  )
}

export default Navbar