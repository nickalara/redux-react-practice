import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// importing the reducer from slice in user.js
import userReducer from "./features/user"
import themeReducer from './features/theme'

// importing redux modules at the highest point in the application
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';

// Similar to useReducer, we use configureStore
const store = configureStore({
  // Pass the reducer from the user slice
  // The is now available to all components in the application
  reducer: {
    user: userReducer,
    theme: themeReducer
  },
});

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap the application in the Provider with the store as a propert */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
