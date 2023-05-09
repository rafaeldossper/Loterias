import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import "@fontsource/roboto";

// import WebFont from 'webfontloader';

// WebFont.load({
//   google: {
//     families: ['Roboto:300,400,500']
//   }
// });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <App />
</React.StrictMode>
);