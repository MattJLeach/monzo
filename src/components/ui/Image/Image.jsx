import React from 'react';
import PropTypes from 'prop-types';

function Image({ src, alt, size }) {
    return (
        <img src={src} alt={alt} width={size} height={size} />
    )
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired
}

export { Image };