import React, { Component } from 'react';
import logo from './spinner_PNG52.png';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm.js';
import Tasks from './components/Tasks/Tasks.js';
import CompletedTasks from './components/CompletedTasks/CompletedTasks.js'


class App extends Component {

  constructor() {
    super();
    this.state = {
      tasksToComplete: [],
      tasksCompleted: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.taskIveCompleted = this.taskIveCompleted.bind(this);
    this.tooDiff = this.tooDiff.bind(this);
  }

  handleSubmit(e, word) {
    e.preventDefault();
    if (word) {
      var arrCopy = [...this.state.tasksToComplete];
      arrCopy.push(word)

      this.setState({
        tasksToComplete: arrCopy
      })
    }
  }

  taskIveCompleted(task, i) {
    var arrCopy = [...this.state.tasksCompleted];
    arrCopy.push(task);

    var arrTakeAway = [...this.state.tasksToComplete];
    arrTakeAway.splice(i, 1);

    this.setState({
      tasksCompleted: arrCopy,
      tasksToComplete: arrTakeAway
    })
  }

  tooDiff(task, i) {
    var arrTakeAway = [...this.state.tasksToComplete];
    arrTakeAway.splice(i, 1);

    this.setState({
      tasksToComplete: arrTakeAway
    })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> Welcome to the Task List Manager</h2>
        </div>
        <TodoForm handleSubmit={this.handleSubmit} />
        <Tasks tasksToDisplay={this.state.tasksToComplete} handleCompleted={this.taskIveCompleted} handleDeleted={this.tooDiff} />
        <CompletedTasks tasksCompletedDisplay={this.state.tasksCompleted} />
      </div>

    );
  }
}

export default App;
