import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItems extends Component {
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  markAsFinish = (e) => {
    console.log(this.props);
  }

  render() {
    const {id,title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markAsFinish.bind(this,id)} /> {''}
          {title}
          <button onClick={this.props.deleteTodo.bind(this,id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

TodoItems.propTypes = {
  todo: PropTypes.object.isRequired
}

// const itemStyle = {
//   backgroundColor: '#f3f4f4',
//   color: 'blue'
// }
const btnStyle = {
  backgroundColor: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}
export default TodoItems
