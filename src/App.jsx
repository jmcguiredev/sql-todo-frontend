import React, { useEffect, useState } from 'react';
const axios = require('axios');

let todoArr;




const App = ({}) => {
    const [todos, setTodos] = useState();

    async function getTodos() {
        axios.get('http://localhost:3000/todos').then(res => {
            console.log(res);
            todoArr = [...res.data];
            setTodos(todoArr);
          })
        
    }

    useEffect(() => {
        getTodos();
    }, []); // the second argument [] makes this only run on mount and not re-renders

    

    return (
        <div id="app">
            <div className="todo-container">
                <div className="todo-row">
                    <span className="todo-cell todo-header-id">ID</span>
                    <span className="todo-cell todo-header-label">Label</span>
                    <span className="todo-cell todo-header-note">Note</span>
                    <span className="todo-cell todo-header-completed">Complete</span>
                </div>
                {todos ? todos.map((todo) => (
                    <div className="todo-row" key={todo._id}>
                        <span className="todo-cell todo-entry todo-entry-id">{todo._id}</span>
                        <span className="todo-cell todo-entry todo-entry-label">{todo.label}</span>
                        <span className="todo-cell todo-entry todo-entry-note">{todo.note}</span>
                        <span className="todo-cell todo-entry todo-entry-completed">{todo.completed}</span>
                    </div>
                )) : null}
            </div>
        </div>
    );
}

export default App;