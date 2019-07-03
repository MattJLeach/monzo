import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Image, Panel } from './ui';

import './apps.scss';

// eslint-disable-next-line no-unused-vars
function Apps({ authError, error, items, fetchApps, isValidToken }) {
    isValidToken();

    if (authError) {
        return (<Redirect to='/' />);
    }

    if (!items || !items.length) {
        fetchApps();
        return (<div>LOADING APPS...</div>);
    }

    return (
        <div>
            <h1 className="page-title">Your Apps</h1>
            <ul id="apps">
                {items.map(({ id, name, logo }) => {
                    return (
                        <li key={id} className="app">
                            <Panel size="medium">
                                <Link to={`/apps/${id}/1`}>
                                    <p>{name}</p>
                                    <Image src={logo} alt={name} size="100" />
                                </Link>
                                <button>
                                    <Link to={`/apps/${id}/edit`}>Edit</Link>
                                </button>
                            </Panel>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

Apps.propTypes = {
    authError: PropTypes.bool,
    error: PropTypes.bool,
    items: PropTypes.array.isRequired,
    fetchApps: PropTypes.func.isRequired,
    isValidToken: PropTypes.func.isRequired
}

export default Apps;