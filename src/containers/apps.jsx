import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchApps } from '../actions/apps';
import { isValidToken } from '../actions/sign-in';
import Apps from '../components/apps.jsx';


function mapStateToProps(state) {
    const { items, error } = state.apps;
    const authError = state.signIn.error

    return { authError, error, items };
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        fetchApps: () => dispatch(fetchApps()),
        isValidToken: () => dispatch(isValidToken())
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Apps)
);