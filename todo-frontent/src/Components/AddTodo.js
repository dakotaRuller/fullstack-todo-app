import React, {Component} from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  handleChange(e) {
    this.setState({inputVal: e.target.value})
  }
  addTodo() {
    this.props.addTodo(this.state.inputVal)
  }
  handleSubmit() {
    if(this.state.inputVal === "") {
      return null
    } else {
      this.addTodo();
      this.setState({inputVal: ""});
    }
  }
  render() {
    return (
      <div className="todo-input-form">
        <input className="todo-input"
          type="text"
          value={this.state.inputVal}
          onChange={this.handleChange}
          onKeyPress={e => (e.which === 13 ? this.handleSubmit() : null)}
          placeholder="Add your todo item"/>
        <button className="submit-button" onClick={this.handleSubmit}>Add Item</button>
      </div>
    );
  }
}

export default AddTodo;