import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Loading} from "./components/Loading";

import {asyncComponent} from "./components/asyncComponent";

const App = asyncComponent(()=>import('./App'), Loading);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
