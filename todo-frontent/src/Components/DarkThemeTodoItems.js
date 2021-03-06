import React, {Component} from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import * as apiCalls from '../API';
import '../CSS/darkTheme.css';

class DarkThemeTodoItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
  }
  componentWillMount() {
    this.loadTodos();
    const bodyElement = document.getElementsByTagName("body")[0];
    bodyElement.setAttribute('style', 'background-color: #000 !important;');
  }

  async loadTodos() {
    let todos = await apiCalls.getTodos();
    this.setState({todos})
  }
  async addTodo(val) {
    let newTodo = await apiCalls.addTodos(val);
    this.setState({todos: [...this.state.todos, newTodo]})
  }
  async removeTodo(id) {
    await apiCalls.removeTodos(id);
    const todos = this.state.todos.filter(todo => todo._id !== id);
    this.setState({todos});
  }
  async toggleCompleted(todo) {
    let updatedTodo = await apiCalls.updateTodo(todo);
    const todos = this.state.todos.map(todo => ((todo._id === updatedTodo._id) ? {...updatedTodo, completed: !todo.completed} : todo));
    this.setState({todos});
  }
  render() {
    const todos = this.state.todos.map(todo => (
      <TodoItem
        key={todo._id}
        {...todo}
        removeTodo={this.removeTodo.bind(this, todo._id)}
        toggleCompleted={this.toggleCompleted.bind(this, todo)}
      />
  ));
    return (
      <div className="dark-theme">
        <h1 className="header"><span className="header-thin">Todo</span> App</h1>
        <p className="small-header">Lets get your life on track</p>
        <AddTodo addTodo={this.addTodo}/>
        <ul className="todo-list">
          {todos}
        </ul>
      </div>
    );
  }
}

export default DarkThemeTodoItems;