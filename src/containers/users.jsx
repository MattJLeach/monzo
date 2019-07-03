import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions/users';
import Users from '../components/users.jsx';


function mapStateToProps(state, router) {
    const { items, error, page } = state.users;
    const appId = router.match.params.id;
    const urlPage = router.match.params.page;

    return { error, items, appId, page, urlPage };
}

function mapDispatchToProps(dispatch, router) {
    return {
        fetchUsers: () => dispatch(fetchUsers(router.match.params.id, router.match.params.page))
    };
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Users)
);