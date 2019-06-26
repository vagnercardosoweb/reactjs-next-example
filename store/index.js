import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import reducers from './ducks';

const middlewares = [];
middlewares.push(thunkMiddleware);

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
