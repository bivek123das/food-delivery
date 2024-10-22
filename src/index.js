import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';  // Correct import

import App from "./App"  // Adjust if appRouter is in a separate file

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={App} />
  </React.StrictMode>
);

// Measure performance in your app
reportWebVitals();

