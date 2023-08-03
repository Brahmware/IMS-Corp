import { styled } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const StyledLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  '& svg': {
    height: '1.25rem',
    width: '1.25rem',
  },

  '&.cursor-out svg': {
    '& *': {
      fill: theme.palette.text.secondary + ' !important',
    },
  },
}));

const SocialLink = (
  {
    href = '',
    target = '_blank',
    rel = 'noreferrer',
    children = null,
  }: {
    href: string;
    target?: string;
    rel?: string;
    children: React.ReactNode;
  }
) => {
  const handleMouseEnter = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget;
    target.classList.remove('cursor-out');
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget;
    target.classList.add('cursor-out');
  };

  return (
    <StyledLink
      href={href}
      target={target}
      rel={rel || 'noreferrer'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='cursor-out'
    >
      {children}
    </StyledLink>
  )
}

export default SocialLink