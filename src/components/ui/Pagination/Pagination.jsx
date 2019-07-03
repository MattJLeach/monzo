import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Pagination.scss';

function Pagination({id, page = 1, disableNext}) {
  const prevLink = page < 2 ? 'Previous' : <Link to={`/apps/${id}/${--page}`}>Previous</Link>;
  const nextLink = disableNext ? 'Next' : <Link to={`/apps/${id}/${++page}`}>Next</Link>;
  
  return (
      <div className="nav">
          <button className="prev">{prevLink}</button>
          <button className="next">{nextLink}</button>
      </div>
  );
}

Pagination.propTypes = {
  id: PropTypes.string.isRequired,
  page: PropTypes.string,
  disableNext: PropTypes.bool
}

export { Pagination };