import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Title from './components/Title/Title.js';
import TodoForm from './components/TodoForm/TodoForm.js';
import TodoList from './components/TodoList/TodoList.js';

window.id = 0;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.apiUrl = 'https://jsonplaceholder.typicode.com/todos';
    this.handleRemove = this.handleRemove.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  componentDidMount() {
    axios.get(this.apiUrl).then((res) => {
      this.setState({
        data: res.data
      });
    })
  }


  addTodo(val) {
    const todo = { title: val, id: `a${window.id++}` }
    axios.post(this.apiUrl, todo)
      .then((res) => {
        const updatedTodoList = [...this.state.data, res.data];
        this.setState({
          data: updatedTodoList
        });
      });
  }

  handleRemove(id) {
    const remainderList = this.state.data.filter((todo) => {
      if (todo.id !== id)
        return todo;
    });

    axios.delete(this.apiUrl + '/' + id).then((res) => {
      this.setState({
        data: remainderList
      });
    });
  }

  render() {
    return (
      <div>
        <Title todoCount={this.state.data.length} />
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.data} remove={this.handleRemove} />
      </div>
    );
  }

}

export default App;
