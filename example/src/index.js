import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker
// ,{unregister}
from './registerServiceWorker';
import {Loading} from "./Loading";
// import App from './App';

import {asyncComponent} from "./components/asyncComponent";
// unregister();
//
const App = asyncComponent(()=>import('./App'), Loading, 1000);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
