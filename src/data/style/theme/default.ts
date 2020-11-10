import { Breakpoint } from '../Breakpoint';
import { Spacing } from '../Spacing';

export const defaultTheme = {
  font: {
    heading: 'BodoniBook',
    body: 'GothamMedium',
  },
  color: {
    white: '#FFFFFF',
    black: '#000000',
  },
  spacing: {
    s01: '0.8rem',
  },
  componentSpacing: {
    [Breakpoint.M]: {
      [Spacing.XL]: '24rem',
      [Spacing.L]: '16rem',
      [Spacing.M]: '8rem',
      [Spacing.S]: '4rem',
    },
    [Breakpoint.XS]: {
      [Spacing.XL]: '14.4rem',
      [Spacing.L]: '8rem',
      [Spacing.M]: '6.4rem',
      [Spacing.S]: '4rem',
    },
  },
} as const;
