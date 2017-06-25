import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({todo, remove}) => {
    return (
        <a href='#' className="list-group-item" onClick={() => remove(todo.id)}>
            {todo.title}
        </a>
    );
};

Todo.propTypes = {
    todo: PropTypes.object,
    remove: PropTypes.func
};

export default Todo;