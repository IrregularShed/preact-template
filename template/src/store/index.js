import createStore from 'storeon';
import persistState from '@storeon/localstorage';

import user from './user';

export const store = createStore([
  user,
  process.env.NODE_ENV !== 'production' && require('storeon/devtools'),
  persistState(['user'])
]);
