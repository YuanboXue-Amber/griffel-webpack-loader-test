import { makeStyles } from '@griffel/react';
import { mixin } from './mixin';

export const useStyles = makeStyles({
  root: {
    color: 'pink',
    height: '20px',
    ...mixin,
  },
});
