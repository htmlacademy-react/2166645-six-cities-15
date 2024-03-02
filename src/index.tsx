import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/app';
import {Setting} from '../src/const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      rentCount = {Setting.RentCount}
    />
  </React.StrictMode>
);
