import React from 'react';
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StateProvider } from './StateProvider'
import reducer, { initialState } from './reducer';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);



root.render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode >,
  //document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an a

// serviceWorker.unregister();