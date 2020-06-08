import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { runWithAdal } from 'react-adal';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import configureStore from './Config/Store';
import { AppProvider } from '@shopify/polaris';
import { authContext, getAccessToken } from './Config/adalConfig';
import NetworkConfig from './Config/NetworkConfig';

import '@shopify/polaris/styles.css'; 

const { persistor, store } = configureStore();

getAccessToken();
 
const DO_NOT_LOGIN = false;

const render = (target) => {
  NetworkConfig.setupInterceptors(store);
  NetworkConfig.configureListener(store);

  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={<div>loading...</div>} persistor={persistor}>
        <AppProvider>
          <App />
        </AppProvider>
      </PersistGate>
    </Provider>,
    target,
  );
};

runWithAdal(
  authContext,
  () => { render(document.getElementById('root')); },
  DO_NOT_LOGIN,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();





