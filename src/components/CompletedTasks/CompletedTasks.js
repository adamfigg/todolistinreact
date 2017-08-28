import React, { Component } from 'react';

class CompletedTasks extends Component {
    render() {
        return (
            <div>
                <h1>Hey look, you actually finished something...</h1>
                
                {
                    this.props.tasksCompletedDisplay.map((task, i) => {
                        return (
                            <h2 key={i}>Good job, you did {task}.</h2>
                        )
                    })
                }
            </div>
        );
    }
}

export default CompletedTasks;