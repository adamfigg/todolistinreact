import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm.js';
import Tasks from './components/Tasks/Tasks.js';
import CompletedTasks from './components/CompletedTasks/CompletedTasks.js'


class App extends Component {

  constructor() {
    super();
    this.state = {
      tasksToComplete: ['thing 1', 'thing 2', 'thing 3'],
      tasksCompleted: ['abc', 'def', 'ghi']
    }
    this.test = this.test.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  test(e, word) {
    e.preventDefault(); 
    alert(word);
  }

  handleSubmit(e, word) {
    e.preventDefault();
    var arrCopy = [...this.state.tasksToComplete];
    arrCopy.push(word)
    this.setState({
      tasksToComplete: arrCopy
    })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> Welcome to the Task List Manager</h2>
        </div>
        <TodoForm handleSubmit={this.handleSubmit} testFunction={this.test}/>
        <Tasks tasksToDisplay={this.state.tasksToComplete} />
        <CompletedTasks tasksCompletedDisplay={this.state.tasksCompleted} />
      </div>
        
    );
  }
}

export default App;
