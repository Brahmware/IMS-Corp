import { Breakpoints as MuiBreakpoints } from '@mui/material';

interface Values {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export const values: Values = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

export interface Breakpoints {
  values: Values;
  keys: (keyof Values)[];
  up: (key: keyof Values) => string;
  down: (key: keyof Values) => string;
  between: (start: keyof Values, end: keyof Values) => string;
  only: (key: keyof Values) => string;
  not: (key: keyof Values) => string;
  unit: 'px' | 'em' | 'rem';
}

export const breakpoints: Breakpoints = {
  values,
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: (key: keyof Values) => `@media (min-width:${values[key]}px)`,
  down: (key: keyof Values) => `@media (max-width:${values[key]}px)`,
  between: (start: keyof Values, end: keyof Values) => `@media (min-width:${values[start]}px) and (max-width:${values[end]}px)`,
  only: (key: keyof Values) => {
    const index = breakpoints.keys.indexOf(key);
    const nextKey = breakpoints.keys[index + 1];
    return nextKey ? breakpoints.between(key, nextKey) : breakpoints.up(key);
  },
  not: (key: keyof Values) => `@media (not ${breakpoints.up(key)})`,
  unit: 'px',
};
