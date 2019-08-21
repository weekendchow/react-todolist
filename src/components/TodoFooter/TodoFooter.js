import React from 'react';
import './TodoFooter.css';

export const TodoFooter = (props) => {
        const { todos, clear } = props;
        const itemCount = Object.keys(todos).filter(id => !todos[id].completed).length;
        return(
            <footer>
                <span>{itemCount} {itemCount === 1 ? 'item' : 'items'} left</span>
                <button className="submitClear" onClick={clear}>Clear Completed</button>
            </footer>
        )
    
}