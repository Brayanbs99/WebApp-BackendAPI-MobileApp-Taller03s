import React from 'react';
import logo from './logo.svg';
import TodoItem from './Components/TodoItem';
import './App.css';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
      todos: [
        { id:1, text:'Sacar la basura.'},
        { id:2, text:'Pintar la casa.'},
        { id:3, text:'Lavar la ropa.'},
      ],
    };
  }
    render(){
      return (
      <div className="App">
        <header className="App-header">
          <h1>Hola Mundo!</h1>
          <ul>
            {this.state.todos.map((todo) => {
              return (
                <TodoItem key={todo.id} text={todo.text}></TodoItem>
              );
            })}
            {/*this.todos.map(function(todo) { Esta función y la de arriba son la misma.
              return <TodoItem text={todo.text}></TodoItem>;
            })*/}
          </ul>
          <img src={logo} className="App-logo" alt="logo" />
          <form onsubmit={this.handleSubmit}>
            <input type="text" value={this.state.newTodo} onChange={this.handleChange}></input>
            <button type="submit">Add Todo</button>
            <button type='checkbox'>Ready</button>
          </form>  
        </header>
      </div>
    );
  }
  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault ();
    this.setState(prevState => ({
      todos: [...prevState.todos, {id: Date.now(), text: prevState.newTodo}],
      newTodo: '',
    }));
  } 
}

export default App;
