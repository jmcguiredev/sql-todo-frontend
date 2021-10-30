import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import { getTodos } from './util/getTodos';

const App = ({ }) => {
    const [todos, setTodos] = useState();

    useEffect(() => {
        getTodos(setTodos);
    }, []); // the second argument [] makes this only run on mount and not re-renders

    return (
        <div id="app">
            <TodoList todos={todos} />
        </div>
    );
}

export default App;