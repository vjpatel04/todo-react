import React from 'react';
import PropTypes from 'prop-types';

const Title = ({todoCount}) => {
    return (
        <div>
            <h1>to-do ({todoCount})</h1>
        </div>
    );
};

Title.propTypes = {
    todoCount: PropTypes.number
};

export default Title;