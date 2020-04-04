import React, { Component } from 'react'

export class TodoAdd extends Component {
  state = {
    title: ''
  }

  addTitle = (e) => this.setState({[e.target.name]: e.target.value});

  submitData = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  render() {
    return (
        <form onSubmit={this.submitData} style={{display:'flex'}}>
          <input type="text" name="title" placeholder="Add todo.." style={{flex:'10',padding:'5px'}} onChange={this.addTitle} value={this.state.title} />
          <button type="submit" className="btn" style={{flex:'1'}}>Submit</button>
        </form>
    )
  }
}

export default TodoAdd
