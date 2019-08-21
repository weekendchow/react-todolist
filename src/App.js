import React from 'react';
import { TodoHeader } from './components/TodoHeader/TodoHeader';
import './App.css';
import { TodoList } from './components/TodoList/TodoList';
import { TodoFooter } from './components/TodoFooter/TodoFooter';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos : {
        '04': {
          label: 'Todo 4',
          completed: true
        },
        '03': {
          label: 'Todo 3',
          completed: false
        },
        '02': {
          label: 'Todo 2',
          completed: false
        },
        '01': {
          label: 'Todo 1',
          completed: false
        }
      },
      filter: 'all'
    };
  }

  _complete = id => {
    const {todos} = this.state;
    const todo = todos[id];
    const newTodos = {...todos, [id]: {...todo, completed: !todo.completed}}

    this.setState({
      todos: newTodos
    });
  }

  _clear = () => {
    const {todos} = this.state;
    const newTodos = {}

    Object.keys(todos).forEach(id => {
      if(!todos[id].completed){
        newTodos[id] = todos[id];
      }
    })

    this.setState({
      todos: newTodos
    });
  }

  _addTodo = label => {
    const {todos} = this.state;
    const id = Object.keys(todos).length+1;

    this.setState({
      todos: {...todos, [id]: {label, completed: false}}
    });
  }


    _setFilter = filter => {

    this.setState({
      filter: filter
    });
  }

  _editTodo = (id, newLabel, completed) => {
    const {todos} = this.state;

    this.setState({
      todos: {...todos, [id]: {label: newLabel, completed}}
    });
  } 

  _deleteTodo = ID => {
    const {todos} = this.state;
    const newTodos = {};

    Object.keys(todos).forEach(id => {
      if (id !== ID) {
        newTodos[id] = todos[id];
      }
    })

    this.setState({
      todos: newTodos
    })
  }



  render(){
    const { todos, filter } = this.state;

    return (
      
      <div className="App">
        <div className='container'>
          <TodoHeader addTodo={this._addTodo} setFilter={this._setFilter} filter={filter}/>
          <TodoList complete={this._complete} editTodo={this._editTodo} deleteTodo={this._deleteTodo} todos={todos} filter={filter}/>
          <TodoFooter clear={this._clear} todos={todos}/>
        </div>
        
      </div>
    );
  }
  
}

export default App;
