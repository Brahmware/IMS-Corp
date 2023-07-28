'use client';

import React, { createContext, useContext } from "react";

export type NavMenuContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMenuContext = createContext<NavMenuContextType>(
  null as unknown as NavMenuContextType
);

export const useNavMenuContext = () => useContext(NavMenuContext);

export const NavMenuProvider = (
  {
    children
  }: {
    children: React.ReactNode
  }
) => {
  const [open, setOpen] = React.useState(false);
  return <NavMenuContext.Provider value={{ open, setOpen }}>{children}</NavMenuContext.Provider>
}