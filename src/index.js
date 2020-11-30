import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './css/main.css';
import './css/sweetalert2.css';

import App from './components/App';
import Leads from './components/leads/leads';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/leads" component={Leads} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
