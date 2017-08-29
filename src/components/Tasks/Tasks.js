import React, { Component } from 'react';

class Tasks extends Component {
    render() {
        return (
            <div>
                <h1>This is what you still need to do you lazy crap...</h1>
            
                {
                  this.props.tasksToDisplay.map((task, i) => {
                    return (
                        <div className="TasksDisplay" key={i}>
                            <h2>{task}</h2>
                        <button onClick={()=> this.props.handleCompleted(task, i)}>task completed</button>
                        <button onClick={()=> this.props.handleDeleted(task, i)}>too difficult</button>
                        </div>
                    )
                  })
                }
            
            </div>
        );
    }
}

export default Tasks;