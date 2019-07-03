import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchApps, updateApp } from '../actions/apps';
import { isValidToken } from '../actions/sign-in';
import App from '../components/app.jsx';


function mapStateToProps(state, router) {
    const authError = state.signIn.error;
    const { items, error } = state.apps;
    const appId = router.match.params.id;
    const redirect = router.history.push;
    return { authError, error, items, appId, redirect };
}

// eslint-disable-next-line no-unused-vars
function mapDispatchToProps(dispatch, router) {
    return {
        fetchApps: () => dispatch(fetchApps()),
        updateApp: details => dispatch(updateApp(details)),
        isValidToken: () => dispatch(isValidToken())
    };
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
);