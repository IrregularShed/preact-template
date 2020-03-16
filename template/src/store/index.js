import { createStoreon } from 'storeon';
import persistState from '@storeon/localstorage';
import { storeonDevtools, storeonLogger } from 'storeon/devtools';

import { user } from './user';

export const store = createStoreon([
  user,
  process.env.NODE_ENV !== 'production' && storeonDevtools,
  process.env.NODE_ENV !== 'production' && storeonLogger,
  persistState(['user'])
]);
