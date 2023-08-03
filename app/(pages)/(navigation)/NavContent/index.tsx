import { Box, styled } from '@mui/material';
import React from 'react'
import Display from './Display';
import Megamenu from './Megamenu';
import Contact from './Contact';
import Settigs from './Settings';
import Copyright from './Copyright';
import Legal from './Legal';

const NavigationContent = styled(Box)(({ theme }) => ({
  ...theme.PageWrapperProps as any,
  paddingTop: theme.Spaces.lg,
  paddingBottom: theme.Spaces.lg,
  height: '100%',
  width: '100%',
  maxWidth: theme.breakpoints.values.xl,
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(24, 1fr)',
  gridTemplateRows: 'repeat(24, 1fr)',
  alignItems: 'center',
  alignContent: 'center',
}));



const NavContetnt = () => {
  return (
    <NavigationContent>
      <Display />
      <Megamenu />
      <Contact />
      <Settigs />
      <Copyright />
      <Legal />
    </NavigationContent>
  )
};

export default NavContetnt;