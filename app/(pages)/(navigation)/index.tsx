'use client';

import { useNavMenuContext } from '@/components/Navbar/NavmenuProvider';
import { Card, CardProps, styled } from '@mui/material';
import React from 'react';
import { NavHoverProvider } from './NavHoverContext';
import NavContetnt from './NavContent';
import navbar from '@/utils/constants/navbar';
import NavContextProvider, { useNavContext } from './NavContent/Megamenu/NavContext/NavContextProvider';

interface NavigationWrapperProps extends CardProps {
  open?: boolean;
}

const NavigationWrapper = styled(Card)<NavigationWrapperProps>(({ theme, open }) => ({
  ...theme.PageWrapperProps as any,
  paddingTop: `calc(${theme.Heights.header.expanded} * 1.275)`,
  padding: 0,
  paddingBottom: 0,
  maxWidth: '100%',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  borderRadius: 0,
  overflow: 'hidden',
  transition: theme.Transitions.createTransition({
    property: 'transform',
    duration: 'shorter'
  }),
  transform: open ? 'translateY(0)' : 'translateY(-100%)',
}));

const Content = () => {

  const { setCurrentItem } = useNavContext();

  return (
    <NavigationWrapper
      elevation={navbar.elevationHigh}
      open={useNavMenuContext().open}
      onMouseEnter={() => setCurrentItem(navbar.defaultMedia)}
    >
      <NavHoverProvider>
        <NavContetnt />
      </NavHoverProvider>
    </NavigationWrapper>
  )
}

export default function Navigation() { return <NavContextProvider> <Content /> </NavContextProvider> }