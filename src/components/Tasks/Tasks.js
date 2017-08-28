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
                            <button>task completed</button>
                        </div>
                    )
                  })
                }
            
            </div>
        );
    }
}

export default Tasks;