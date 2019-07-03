import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';

import SignIn from './containers/sign-in.jsx';
import Apps from './containers/apps.jsx';
import Users from './containers/users.jsx';
import App from './containers/app.jsx';

import rootReducer from './reducers/root-reducer';

import './index.scss';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={SignIn} />
                <Route exact path="/apps" component={Apps} />
                <Route path="/apps/:id/edit" component={App} />
                <Route path="/apps/:id/:page" component={Users} />
                <Route component={SignIn} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app')
);
