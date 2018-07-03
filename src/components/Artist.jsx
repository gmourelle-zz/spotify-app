import React from 'react';
import PropTypes from 'prop-types';

const Artist = props => {
    return (
        <div
          className={`artist ${props.selected ? 'isSelected' : ''}`}
        >
          {/* ... */}
        </div>
      )
};

Artist.propTypes = {
    
};

export default Artist;