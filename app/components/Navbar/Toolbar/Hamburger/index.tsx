'use client';

import { HamburgerIcon as Icon } from '@/components/Icons';
import { Box, IconButton, styled } from '@mui/material'
import React from 'react'
import { useNavMenuContext } from '../../NavmenuProvider';

const HamburgerWrapper = styled(Box)(({ theme }) => ({
  margin: '0',
}));

interface HamburgerIconProps extends React.SVGProps<SVGSVGElement> {
  open?: boolean;
  hoverover?: 'true' | 'false';
}

const HamburgerIcon = styled(Icon)<HamburgerIconProps>(({ theme, open, hoverover }) => {
  if (!open) return ({
    width: '1.5rem',
    height: '1.5rem',

    '& path': {
      stroke: theme.palette.secondary.main,
      strokeWidth: '0.33rem',
      transition: "all 0.1s ease-in-out",
    },

    '& .hamburger_svg__middle-bar': {
      transform: hoverover === 'true' ? 'scaleX(100%)' : 'translateX(40%) scaleX(60%)',
    }
  });

  return ({
    width: '1.5rem',
    height: '1.5rem',
    transform: 'scale(1.125)',

    '& path': {
      stroke: hoverover === 'true' ? theme.palette.error.main : theme.palette.secondary.main,
      strokeWidth: '0.35rem',
      transition: "all 0.1s ease-in-out",
    },

    '& .hamburger_svg__top-bar': {
      transform: 'rotate(45deg)',
      transformOrigin: '12% 36%',
      transition: 'all 0.1s ease-in-out',
    },

    '& .hamburger_svg__bottom-bar': {
      transform: 'rotate(-45deg)',
      transformOrigin: '13% 64%',
      transition: 'all 0.1s ease-in-out',
    },

    '& .hamburger_svg__middle-bar': {
      transform: 'translateX(-100%)',
    }
  })
});

const Hamburger = () => {

  const { open, setOpen } = useNavMenuContext();
  const [hover, setHover] = React.useState("false");

  return (
    <React.Fragment>
      <HamburgerWrapper>
        <IconButton
          disableRipple
          disableFocusRipple
          disableTouchRipple
          onClick={() => setOpen(!open)}
          onMouseEnter={() => setHover('true')}
          onMouseLeave={() => setHover('false')}
        >
          <HamburgerIcon open={open} hoverover={hover} />
        </IconButton>
      </HamburgerWrapper>
    </React.Fragment>
  )
}

export default Hamburger