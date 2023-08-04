import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import Link from 'next/link';
import { useNavContext } from './NavContextProvider';
import navbar from '@/utils/constants/navbar';

const NavContextWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  width: '100%',
  height: '100%',

  '&:hover': {
    '& .navmenu-context': {
      color: theme.palette.primary.main,
    },
  }
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  margin: `${theme.Spaces.sm} 0`,
  marginLeft: `calc(-0.5 * ${theme.Spaces.xxs})`,
  transition: theme.Transitions.createTransition({ property: 'color' }),
}));

const MenuItem = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.secondary,
  fontWeight: theme.typography.fontWeightMedium,
  marginBottom: theme.Spaces.xxs,
  transition: theme.Transitions.createTransition([
    { property: 'color' }, { property: 'transform' }
  ]),

  '&:hover': {
    color: theme.palette.text.primary,
  }

}));

interface NavMenuItem {
  title: string,
  link: string,
}

const NavContext = (
  {
    title,
    videoUrl,
    menuItems,
  }: {
    title: string,
    videoUrl: string,
    menuItems: NavMenuItem[],
  }
) => {

  const { setCurrentItem } = useNavContext();

  return (
    <NavContextWrapper
      onMouseEnter={() => setCurrentItem({ title, videoUrl })}
      onMouseLeave={() => setCurrentItem(navbar.defaultMedia)}
    >
      <Title
        className='navmenu-context'
        variant='h4'
        as='h2'
      >
        {title}
      </Title>
      {
        menuItems.map((item, index) => (
          <MenuItem
            key={index}
            href={item.link}
          >
            {item.title}
          </MenuItem>
        ))
      }
    </NavContextWrapper>
  )
}

export default NavContext;