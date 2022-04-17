import React from 'react';
import ReactDOM from 'react-dom/client';
import { ImageFinder } from './components/App/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImageFinder />
  </React.StrictMode>,
  document.getElementById('root')
);
