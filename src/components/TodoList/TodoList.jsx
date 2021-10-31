import React from 'react';
import CircleCheckBox from '../CircleCheckBox/CircleCheckBox';
import Button from '../Button/Button';
import './style';


const TodoList = ({ todos, handleCheckBoxClick, saveEnabled, handleSave, saved, handleEdit}) => {

    function truncate(text, length) {
        return (text.slice(0, length) + (length < text.length ? '...' : ''));
    }

    const labelLength = 15;
    const noteLength = 15;

    return (
        <div className="outer-container">
            <div className="todo-container">
                <div className="todo-row">
                    <span className="todo-cell todo-header-id">ID</span>
                    <span className="todo-cell todo-header-label">Label</span>
                    <span className="todo-cell todo-header-note">Note</span>
                    <span className="todo-cell todo-header-completed">Complete</span>
                    <span className="todo-cell todo-header-edit">Edit</span>
                </div>
                {todos ? todos.map((todo) => (
                    <div className="todo-row" key={todo._id}>
                        <span className="todo-cell todo-entry todo-entry-id">{todo._id}</span>
                        <span className="todo-cell todo-entry todo-entry-label">{truncate(todo.label, labelLength)}</span>
                        <span className="todo-cell todo-entry todo-entry-note">{truncate(todo.note, noteLength)}</span>
                        <span className="todo-cell todo-entry todo-entry-completed">
                            <CircleCheckBox
                                checked={todo.completed}
                                handleClick={handleCheckBoxClick}
                                todoId={todo._id} />
                        </span>
                        <span className="todo-cell todo-entry todo-entry-edit">
                            <Button 
                            text="Edit"
                            btnClass="button-primary"
                            onClick={handleEdit}
                            enabled={true} 
                            todoId={todo._id}/>
                        </span>
                    </div>
                )) : null}
            </div>
            <div className="todo-controls">
            <span className="save-message" style={{ opacity: saved ? 1 : 0}}>Changes Saved Successfully.</span>
                <Button
                    text="Save"
                    btnClass="button-primary"
                    onClick={handleSave}
                    enabled={saveEnabled} />
            </div>
        </div>

    );
}

export default TodoList;