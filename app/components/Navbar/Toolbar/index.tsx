import React from 'react'
import Search from './Search';
import Join from './Join';
import Hamburger from './Hamburger';

const Toolbar = () => {
  return (
    <React.Fragment>
      <Search />
      <Join />
      <Hamburger />
    </React.Fragment>
  )
}

export default Toolbar