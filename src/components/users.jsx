import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Image, Panel, Pagination } from './ui';

import './users.scss';

function Users({ error, items, fetchUsers, appId, page, urlPage }) {
    if (error) {
        return (<Redirect to='/' />);
    }

    if (!items || !items.length || page !== urlPage) {
        fetchUsers(page);
    }

    if (!items || !items.length) {
        return (<div>LOADING USERS...</div>);
    }

    return (
        <div id="users">
            <h1 className="page-title">App Users</h1>
            <Pagination id={appId} page={page} disableNext={items.length < 25} />
            <div className="users-container">
                {items.map(({ id, name, email, avatar }) => {
                    return (
                        <Panel key={id}>
                            <p>Name: {name}</p>
                            <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
                            <Image src={avatar} alt={name} size="50" />
                        </Panel>
                    );
                })}
            </div>
            <Pagination id={appId} page={page} disableNext={items.length < 25} />
        </div>
    );
}

Users.propTypes = {
    error: PropTypes.bool,
    items: PropTypes.array.isRequired,
    fetchUsers: PropTypes.func.isRequired,
    appId: PropTypes.string,
    page: PropTypes.string,
    urlPage: PropTypes.string
}

export default Users;