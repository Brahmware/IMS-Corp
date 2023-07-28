import React, { createContext, useContext, useState } from 'react';

// Create a new context
const ThemeContext = createContext<any>(null);

// Create a custom hook to access the context value
export const useThemeContext = () => useContext(ThemeContext);

// Create a provider component to wrap your app with the context
export const ThemeContextProvider = (
  {
    children
  }: {
    children: React.ReactNode
  }
) => {
  const [mode, setMode] = useState<'dark' | 'light'>('light');

  return <ThemeContext.Provider value={{ mode, setMode }}>{children}</ThemeContext.Provider>;
};
