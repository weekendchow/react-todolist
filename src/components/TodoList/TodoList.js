import React from 'react';
import { TodoListItem } from '../TodoListItem/TodoListItem'
import './TodoList.css'

export const TodoList = (props) => {
    
    const { todos, filter, complete, editTodo, deleteTodo } = props;

    const filteredTodos = Object.keys(todos).filter(id => {
        return filter === 'all' || (filter === 'active' && !todos[id].completed) || (filter === 'completed' && todos[id].completed);
    })

    return(
        <ul className="todos">
            {
                filteredTodos.map(id => (
                    <TodoListItem 
                        key={id} 
                        id={id} 
                        complete={complete} 
                        editTodo={editTodo} 
                        deleteTodo={deleteTodo}
                    {...todos[id]}/>
                ))
            }
        </ul>
    )
    
    
}