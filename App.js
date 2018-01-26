import React, { Component } from 'react';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './app/reducers';
import AppContainer from './app/containers/AppContainer';
import { StyleSheet } from 'react-native';


const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});
export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
         <AppContainer />
      </Provider>
    )
    }
}


