'use client';

import { useNavMenuContext } from '@/components/Navbar/NavmenuProvider';
import { Box, BoxProps, styled } from '@mui/material';
import React from 'react';
import { NavHoverProvider } from './NavHoverContext';
import NavContetnt from './NavContent';

interface NavigationWrapperProps extends BoxProps {
  open?: boolean;
}

const NavigationWrapper = styled(Box)<NavigationWrapperProps>(({ theme, open }) => ({
  ...theme.PageWrapperProps as any,
  padding: 0,
  paddingBottom: 0,
  maxWidth: '100%',
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  zIndex: '100',
  backgroundColor: theme.palette.success.light,
  transition: theme.Transitions.createTransition({
    property: 'transform',
    duration: 'shorter'
  }),
  transform: open ? 'translateY(0)' : 'translateY(-100%)',
}));

const Navigation = () => {
  return (
    <NavigationWrapper open={useNavMenuContext().open}>
      <NavHoverProvider>
        <NavContetnt />
      </NavHoverProvider>
    </NavigationWrapper>
  )
}

export default Navigation