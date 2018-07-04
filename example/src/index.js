import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import {asyncComponent} from "./components/asyncComponent";

const App = asyncComponent()

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
