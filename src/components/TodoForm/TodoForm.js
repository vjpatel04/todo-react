import React from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ addTodo }) => {

    let input;

    const submitTodo = (e) => {
        e.preventDefault();
            addTodo(input.value);
            input.value = '';
    }

    return (
        <form onSubmit={(e) => { submitTodo(e)}}>
            <input className='form-control col-md-12' ref={node => { input = node; }} />
        </form>
    );
};

TodoForm.propTypes = {
    addTodo: PropTypes.func
};

export default TodoForm;