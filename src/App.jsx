import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList/TodoList';
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
            <TodoList todos={todos}/>
        </div>
    );
}

export default App;