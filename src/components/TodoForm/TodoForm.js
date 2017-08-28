import React, { Component } from 'react';
import './TodoForm.css';


class TodoForm extends Component {

 constructor() {
    super();
    this.state = {
        inputValue: ''
    }
 }
    render() {
        return (
            <div>
                <h1>Why don't you add something to your TODO list?</h1>
                <form>
                    <input onChange={(e)=> this.setState({ inputValue: e.target.value })} placeholder="What's something you need to get done?"></input>
                    <button onClick={(e)=> this.props.handleSubmit(e, this.state.inputValue)}>add to my list</button>
                    <button onClick={(e)=> this.props.testFunction(e, 'hey')}>  This is a test  </button>
                </form>
            </div>
        )
    }
}


export default TodoForm;