import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Check from '../Check'
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
var data = 1;

root.render(
  <>
    <App />
    {/* <Check name ={data}/> */}
    </>
  
);
