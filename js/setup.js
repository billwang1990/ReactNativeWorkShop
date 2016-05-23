'use strict';

import React, { Componet } from 'react';
import { Provider } from 'react-redux';
import { App } from 'App';


export default function  () {

  return () => {
    <Provider store={store}>
      <App>
    </Provider>
  }
}