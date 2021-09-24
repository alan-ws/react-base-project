import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { setup } from 'goober';

setup(React.createElement);

ReactDOM.render(<App />, document.getElementById('root'));
