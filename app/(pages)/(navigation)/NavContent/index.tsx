import { Box, styled } from '@mui/material';
import React from 'react'

const NavigationContent = styled(Box)(({ theme }) => ({
  ...theme.PageWrapperProps as any,
  paddingTop: theme.Spaces.lg,
  paddingBottom: theme.Spaces.lg,
  height: '100%',
  width: '100%',
  maxWidth: theme.breakpoints.values.xl,
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridTemplateRows: 'repeat(12, 1fr)',
  alignItems: 'center',
  alignContent: 'center',
  backgroundColor: theme.palette.success.main,
}));

const NavContetnt = () => {
  return (
    <NavigationContent>
      <div>NavContent</div>
    </NavigationContent>
  )
};

export default NavContetnt;