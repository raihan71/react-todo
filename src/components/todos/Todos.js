/* eslint-disable no-unused-expressions */
import React,{ Component } from 'react';
import TodoItems from './TodoItems';
import PropTypes from 'prop-types';

class Todos extends Component {
   render() {
     return this.props.todos.map((todo) => (
      <TodoItems key={todo.id} todo={todo} markAsFinish={this.props.markAsFinish} deleteTodo={this.props.deleteTodo}></TodoItems>
     ));
   }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;