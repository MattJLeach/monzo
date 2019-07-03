import React from 'react';
import PropTypes from 'prop-types';
import './Panel.scss';

function Panel({ children }) {
    const classNames = `panel-container`;
    return (
        <div className={classNames}>
            {children}
        </div>
    )
}

Panel.propTypes = {
    children: PropTypes.node.isRequired
}

export { Panel };