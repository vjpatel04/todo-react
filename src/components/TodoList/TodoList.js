import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo.js';

const TodoList = ({todos, remove}) => {

    const todoNode = todos.map((todo)=> {
        return <Todo todo={todo} key={todo.id} remove={remove}/>
    })

    return (
        <div className='list-group' style={{marginTop: '50px'}}>
            {todoNode}
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array,
    remove: PropTypes.func
};

export default TodoList;