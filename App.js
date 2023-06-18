// App.js

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ItemListScreen from './ItemListScreen';
import ItemCreateScreen from './ItemCreateScreen';

const App = () => {
  return (
    <Provider store={store}>
      <ItemListScreen />
      <ItemCreateScreen />
    </Provider>
  );
};

export default App;
  