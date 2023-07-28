'use client';

import React, { createContext, useContext } from "react";

export type NavHoverContextType = {
  currentUrl: string;
  setCurrentUrl: React.Dispatch<React.SetStateAction<string>>;
}

const NavHoverContext = createContext<NavHoverContextType>(
  null as unknown as NavHoverContextType
);

export const useNavHoverContext = () => useContext(NavHoverContext);

export const NavHoverProvider = (
  {
    children
  }: {
    children: React.ReactNode
  }
) => {
  const [currentUrl, setCurrentUrl] = React.useState('');
  return <NavHoverContext.Provider value={{ currentUrl, setCurrentUrl }}>{children}</NavHoverContext.Provider>
}