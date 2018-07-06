import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Loading} from "./components/Loading";
// import App from './App';

import {asyncComponent} from "./components/asyncComponent";
//
const App = asyncComponent(()=>import('./App'), Loading, 1000);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
