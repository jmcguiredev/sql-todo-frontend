const axios = require('axios');

export async function getTodos(setTodos) {
    let todoArr;

    axios.get('http://localhost:3000/todos').then(res => {
        console.log(res);
        todoArr = [...res.data];
        todoArr.forEach((todo) => {
            todo.modified = false;
        })
        setTodos(todoArr);
    });

}