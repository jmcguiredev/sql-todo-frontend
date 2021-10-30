import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import { getTodos } from './util/getTodos';

const App = ({ }) => {

    const [todos, setTodos] = useState();
    const [todosModified, setTodosModified] = useState(false);

    function handleCheckBoxClick(todoId) {
        setTodosModified(true);
        let index = todos.indexOf(todos.find((todo) => todoId === todo._id));
        let newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    }

    function handleSave() {

    }

    useEffect(() => {
        getTodos(setTodos);
    }, []); // the second argument [] makes this only run on mount and not re-renders

    return (
        <div id="app">
            <TodoList 
            todos={todos} 
            handleCheckBoxClick={handleCheckBoxClick} 
            saveEnabled={todosModified}
            handleSave={handleSave} />
        </div>
    );
}

export default App;