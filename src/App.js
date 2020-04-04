import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Todos from './components/todos/Todos'
import TodoAdd from './components/todos/TodoAdd'
import Header from './components/layouts/Header'
import About from './components/pages/About'

const url = 'https://jsonplaceholder.typicode.com/todos';
class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount(){
    axios.get(`${url}?_limit=10`)
          .then(res => this.setState({
            todos: res.data
          })).catch(err => {
            alert(`Oopss.. ${err}`)
          });
  }

  markAsFinish = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  deleteTodo = (id) => {
    axios.delete(`${url}/${id}`)
          .then(res => {
            this.setState({
              todos: [...this.state.todos.filter(todo => todo.id !== id)]
            });
          }).catch((err) => {
            alert(`Opps.. ${err}`)
          });
  };

  addTodo = (title) => {
    axios.post(`${url}`,{
      title: title,
      completed: false
    }).then(res => this.setState({
        todos: [...this.state.todos,res.data]
      })
    ).catch(err => {
      alert(`Oopss.. ${err}`)
    });
  };

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header></Header>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <TodoAdd addTodo={this.addTodo}></TodoAdd>
                <Todos todos={this.state.todos} markAsFinish={this.markAsFinish} deleteTodo={this.deleteTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
