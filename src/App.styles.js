import { makeStyles, shorthands } from '@griffel/react';

export const useHeroStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
  },
});

export const useTextStyles = makeStyles({
  root: {
    fontFamily: 'sans-serif',
  },
  header: {
    fontWeight: 'bold',
    fontSize: '40px',
    lineHeight: '50px',
  },
  purple: {
    color: 'blueviolet',
    fontFamily: 'cursive',
    '@media (min-width: 767px)': {
      color: 'salmon',
    },
  },
});

export const useButtonStyles = makeStyles({
  root: {
    width: '200px',
    ...shorthands.margin('10px'),
    ...shorthands.padding('10px'),
    ...shorthands.borderRadius('4px'),
    backgroundColor: 'lightblue',
    fontFamily: 'monospace',
    ':hover': {
      backgroundColor: 'cornflowerblue',
      fontWeight: 'bold',
    },
  },
  icon: {
    paddingRight: '5px',
  },
});
