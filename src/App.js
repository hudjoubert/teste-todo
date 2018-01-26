import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Routes from './routes/routes'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';


const store = createStore(reducers);
const AppNavigator = StackNavigator(Routes, { headerMode: 'none' });

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
