import React from 'react';
import todoData from './testData.json';

let { todos } = todoData;


const App = ({}) => {
    return (
        <div id="app">
            <div className="todo-container">
                <div className="todo-row">
                    <span className="todo-cell todo-header-id">ID</span>
                    <span className="todo-cell todo-header-label">Label</span>
                    <span className="todo-cell todo-header-note">Note</span>
                    <span className="todo-cell todo-header-completed">Complete</span>
                </div>
                {todos.map((todo) => (
                    <div className="todo-row">
                        <span className="todo-cell todo-entry todo-entry-id">{todo.id}</span>
                        <span className="todo-cell todo-entry todo-entry-label">{todo.label}</span>
                        <span className="todo-cell todo-entry todo-entry-note">{todo.note}</span>
                        <span className="todo-cell todo-entry todo-entry-completed">{todo.completed}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;