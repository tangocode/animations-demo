import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers/reducers';
import actions from './actions/actions'; 

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger);
  }
  
  const store = createStore(
    reducers,
    undefined,
    applyMiddleware(...middlewares)
  );

  return store
}

export default configureStore;
