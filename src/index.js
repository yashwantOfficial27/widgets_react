import { render } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom'
import App from './App'

// eslint-disable-line no-console
ReactDom.render(<App />, document.querySelector('#root')); 
