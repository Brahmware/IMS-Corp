'use client';

import { Card, CardProps, styled } from '@mui/material'
import React from 'react'
import { IMSLogoFull } from '@components/Logo';
import Toolbar from '@components/Navbar/Toolbar';
import { useNavMenuContext } from './NavmenuProvider';

const Bar = styled(Card)(({ theme }) => ({
  width: '100%',
  borderRadius: 0,
  position: 'fixed',
  padding: `0 ${theme.Spaces.sm}`,
  top: '0',
  left: '0',
  right: '0',
  zIndex: '500',
  backgroundColor: theme.palette.background.default,
  transition: theme.Transitions.createTransition([{
    property: 'height',
    duration: 'shorter'
  }]),
  height: theme.Heights.header.expanded,

  '&.menu-open': {
    boxShadow: '0 0 0 0 #0000',
    height: `calc(${theme.Heights.header.expanded} * 1.275)`,

    '& .bar-content': {
      transform: `translateY(${theme.Spaces.xxs})`,
    }
  },
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
  transition: theme.Transitions.createTransition({
    property: 'transform'
  }),

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
    <Bar
      elevation={4}
      className={useNavMenuContext().open ? 'menu-open' : ''}
    >
      <BarContent className='bar-content'>
        <Logo href="/">
          <LogoIcon />
        </Logo>
        <Toolbar />
      </BarContent>
    </Bar>
  )
}

export default Navbar