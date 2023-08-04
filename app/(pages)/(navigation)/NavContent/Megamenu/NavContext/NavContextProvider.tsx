'use client';

import navbar from '@/utils/constants/navbar';
import React, { createContext, useContext } from 'react';

export type NavContextType = {
  currentItem: {
    title: string;
    videoUrl: string;
  };
  setCurrentItem: (item: { title: string; videoUrl: string }) => void;
};

export const NavContext = createContext<NavContextType>({
  currentItem: navbar.defaultMedia,
  setCurrentItem: () => {},
});

export const useNavContext = () => useContext(NavContext);

export const NavContextProvider = ({ children }: {children: React.ReactNode}) => {
  const [currentItem, setCurrentItem] = React.useState(navbar.defaultMedia);

  return (
    <NavContext.Provider value={{ currentItem, setCurrentItem }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;