import { SearchIcon as Icon } from '@/components/Icons';
import { Box, Button, styled } from '@mui/material'
import React from 'react'

const SearchWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: `0 ${theme.Spaces.xs}`,
  justifySelf: 'end',
}));

const SearchInput = styled('input')(({ theme }) => ({
  margin: '0 1rem',
  padding: '0.5rem 1rem',
  borderRadius: '1rem',
  border: 'none',
  outline: 'none',
  backgroundColor: theme.palette.secondary.light,

  color: (
    theme.palette.mode === 'dark' ?
      theme.palette.secondary.contrastText :
      theme.palette.secondary.main
  ),

  fontSize: '0.85rem',
  lineHeight: '1em',
  fontWeight: theme.typography.fontWeightRegular,
  letterSpacing: '0.025rem',
  width: '20rem',
  transition: theme.Transitions.createTransition({ property: 'width' }),

  '&:focus': {
    width: '33rem',
  },
}));

const IconButton = styled(Button)(({ theme }) => ({
  padding: '0.56rem',
  minWidth: 'auto',
  borderRadius: '50%',

  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,

    '& svg path': {
      stroke: theme.palette.secondary.contrastText,
    },
  },
}));

const SearchIcon = styled(Icon)(({ theme }) => ({
  width: '1rem',
  height: '1rem',

  '& path': {
    strokeWidth: '0.175rem',
    stroke: theme.palette.primary.contrastText,
    transition: theme.Transitions.createTransition({
      property: 'stroke',
      duration: 'shorter',
      easing: 'easeInOut'
    }),
  },
}));

const Search = () => {
  return (
    <SearchWrapper>
      <SearchInput type="text" placeholder="Search in IMS" />
      <IconButton
        disableElevation
        variant='contained'
        aria-label="search"
        vocab='Search in IMS'
      >
        <SearchIcon />
      </IconButton>
    </SearchWrapper>
  )
}

export default Search